@isTest
public with sharing class lwcCSVUploaderController_Test {
    static testMethod void method1() {
        String str = JSON.serialize('Name,Site,Account Source\nGoogle,https://google.com,Web');        
        lwcCSVUploaderController.saveFile(str);   
    }
}
