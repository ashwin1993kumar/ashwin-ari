import { LightningElement, wire } from 'lwc';
import { MessageContext } from 'lightning/messageService';
import {publishMC, subscribeMC, unsubscribeMC} from 'c/lmsShared1';
export default class LmsParent extends LightningElement {
    subscription = null;
    msgToPublish;
    receivedMessage='';
    markVal=[{name:'123'}];
    @wire(MessageContext) messageContext;
    handleSubscribe() {
       console.log(' Clicked subscribe ');
       if ( this.subscription ) {
            console.log(' Inside parent Unsubscribe  -- ');
            unsubscribeMC(this.subscription);
            this.subscription = null;
        }
       else {
           console.log(' Clicked parent subscribe else ');
            subscribeMC(this.messageContext, (subscription, message) => {
                this.subscription = subscription;
                /*this.receivedMessage = (message && this.optValues.includes(message.lmsMsgType)) 
                    ? message.lmsData.message : this.receivedMessage;*/
                this.receivedMessage = message.lmsData.message;
                console.log(' Inside parent Subscribe  -- '+this.subscription+' '+this.receivedMessage);
            });
        }
    }
   setMsg(event){
    this.msgToPublish = event.target.value;
    }
    handlePublish() {
        console.log(' Inside parent publish  -- '+this.msgToPublish);
        publishMC(this.messageContext, this.msgToPublish, this.markVal);
    }  
}