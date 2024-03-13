/***
     * This class is used to collect contact Details for all Loan Application
     * Story -CS-1324
     * 
     * Author - Anil Gunti
     * Date  - 06/25
     * 
     * Modified by Amol - 11/24/2020 - To show enterprise name along with Contacts in the borrowers lookup search.
     * CS-2896 Amol 02/11/2021 Differentiate a borrower on an application using a unique Identifier - CH01
     * CS-6767 Sudha 04/06/2022 Search By MRID & CRD When Adding Advisor - Retention Loan - CH02
     * CS-6816 Sudha 04/06/2022 Search By CRD When Adding Advisor -  TA - CH03
     * CS-7747 Sudha 14/06/2022 Delay When Searching Name In Borrower Name Search Box - TA / Retention - CH04
     * 
     */


public without sharing class LookupController {
    @AuraEnabled(cacheable=true)
    public static List<object> lookupData(String ObjectName,String SearchText,String ObjectFilter,Boolean LA){
        try{
            String Filter='';
            String query='';String nameOrMRIDQuery='';String crdNumberQuery='';
            Boolean showMRID=LA;
            List<object> resultsList=new List<object>();
            //Commented for CH04
            /*if(ObjectName=='Contact'){
                //CH01 Start
                query='select Id,Account.Id,Account.Name,CRD_Number__c,Total_AUM_LoanApp__c,Total_Brokerage_AUM__c,Total_Advisory_AUM__c,Name,Modified_R_Type__c,Rep_Type__c,Master_Rep_ID__c,YTD_GDC__c,Prior_Yr_GDC__c,GP_ROA__c,(select Id,Gross_Profit_ROA__c from Advisor_Profitability__r order by LastmodifiedDate Desc limit 1),(Select Id,YTD_GDC_All__c,Prior_full_year_GDC_All__c from Financials__r order by LastmodifiedDate Desc limit 1) from '+ObjectName;
                //CH01 End
                //query+=SearchText==''?' order by Name Limit 100':' where Account.Id != null AND Name like \''+SearchText+'%\''+Filter+ ' order by Name Limit 100';
                //CH02 & CH03 Start
                query+=SearchText==''?' order by Name Limit 100':' where Account.Id != null AND ';                
                //String condition='Name like \''+SearchText+'%\''+Filter+ ' order by Name Limit 100';
                String condition='';                
                if(showMRID){                    
                    condition='(Name like \''+SearchText+'%\''+'OR Master_Rep_ID__c like \''+SearchText+'%\''+'OR CRD_Number__c like \''+SearchText+'%\')'+Filter+ ' order by Name Limit 100';
                }                
                else{
                    condition='(Name like \''+SearchText+'%\''+'OR CRD_Number__c like \''+SearchText+'%\')'+Filter+ ' order by Name Limit 100';
                }                
                query+=condition;
                //CH02 & CH03 End
                //return Database.query('select Id,Name,Modified_R_Type__c,Master_Rep_ID__c,YTD_GDC__c,Prior_Yr_GDC__c,GP_ROA__c,(select Id,Gross_Profit_ROA__c from Advisor_Profitability__r order by LastmodifiedDate Desc limit 1),(Select Id,YTD_GDC_All__c,Prior_full_year_GDC_All__c from Financials__r order by LastmodifiedDate Desc limit 1) from '+ObjectName+' where Name like \''+SearchText+'%\''+Filter+ ' Limit 100'); 
                System.debug('Search query?????'+query);
                return Database.query(query);
            }*/
            
            if(ObjectName=='Contact'){
                //CH01 Start
                query='select Id,Account.Id,Account.Name,CRD_Number__c,Total_AUM_LoanApp__c,Total_Brokerage_AUM__c,Total_Advisory_AUM__c,Name,Modified_R_Type__c,Rep_Type__c,Master_Rep_ID__c,YTD_GDC__c,Prior_Yr_GDC__c,GP_ROA__c,(select Id,Gross_Profit_ROA__c from Advisor_Profitability__r order by LastmodifiedDate Desc limit 1),(Select Id,YTD_GDC_All__c,Prior_full_year_GDC_All__c from Financials__r order by LastmodifiedDate Desc limit 1) from '+ObjectName;
                //CH01 End                
                //CH02 & CH03 Start
                //CH04 Start             
                if(SearchText==''){                    
                    query+=' order by Name Limit 100';
                    resultsList=Database.query(query);
                }
                else{                    
                    query+=' where Account.Id != null';                        
                    nameOrMRIDQuery= (showMRID?query+' AND (Name like \''+SearchText+'%\'' +' OR Master_Rep_ID__c like \'' +SearchText+'%\')' +' order by Name Limit 100'
                                :query+' AND Name like \''+SearchText+'%\'' +' order by Name Limit 100');
                    resultsList= Database.query(nameOrMRIDQuery); 
                    if(resultsList.isEmpty()){ 
                        crdNumberQuery=query+' AND CRD_Number__c like \''+SearchText+'%\'' +' order by Name Limit 100';                   
                        resultsList= Database.query(crdNumberQuery);
                    }                        
                }               
                //CH04 End                                             
                System.debug('resultsList ?????'+resultsList);
                return resultsList;
            }            
            else{                
                query='select Id,Name from '+ObjectName;
                query+=SearchText==''?' order by Name  Limit 100':' where Name like \''+SearchText+'%\''+Filter+ ' order by Name LIMIT 100';
                //return Database.query('select Id,Name from '+ObjectName+' where Name like \''+SearchText+'%\''+Filter+ ' Limit 100');
                return Database.query(query);
            }
        }catch(Exception ex){
            System.debug(ex);
            System.debug(ex.getMessage());
            System.debug(ex.getLineNumber());
        }
        return new List<Object>();
    }
}