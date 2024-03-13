
import { LightningElement, wire } from "lwc";
import TILE_SELECTION_MC from '@salesforce/messageChannel/Status__c';
import {
    subscribe,
    unsubscribe,
    MessageContext,
    publish
} from 'lightning/messageService';
export default class MapLocationLWC extends LightningElement {
    selectedMarkerValue = 'SF1';
    mapMarkers = [
        {
            location: {
                Street: 'Bus Sta Upas',
                City: 'Bengaluru',
                State: 'Karnataka',
            },
            title: 'Majestic Bus Stand',
            description:
                'Majestic.',
        },
        {
            location: {
                Street: 'Subhash Nagar, Sevashrama',
                City: 'Bengaluru',
                State: 'Karnataka',
            },
            title: 'Railway Station',
            description: 'Railway Station.',
        },
        {
            location: {
                Street: 'Mysore Rd, Jnana Bharathi',
                City: 'Bengaluru',
                State: 'Karnataka',
            },
            title: 'Bangalore University',
            description:
                'Bangalore University.',
        },
    ];
 
    markersTitle = 'Charging Stations';
 
    center = {
        location: { Latitude: '12.977777', Longitude: '77.572573' },
    };
    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
        console.log(' selected CS -- '+JSON.stringify(this.selectedMarkerValue));
    }
    @wire(MessageContext)
    messageContext;
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            TILE_SELECTION_MC,
            (message) => this.handleCustomerSelect(message)
        );
    }
    handleCustomerSelect(message) {
        this.clearall=message.clearall;
        alert('message clearall-->'+message.clearall);
        alert('clearall-->'+this.clearall);
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}