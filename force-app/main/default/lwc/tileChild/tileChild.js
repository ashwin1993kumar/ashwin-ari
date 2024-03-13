import { LightningElement,wire } from 'lwc';
import cityValues from '@salesforce/apex/chargingStationvalues.cityCoordinates';
import TILE_SELECTION_MC from '@salesforce/messageChannel/Status__c';
import {
    subscribe,
    unsubscribe,
    MessageContext,
    publish
} from 'lightning/messageService';

export default class TileChild extends LightningElement {
    latitude='12.977777';
    longitude='77.572573';
    oldlat=this.latitude;
    oldlang=this.longitude;
    refreshNow=false;
    @wire(MessageContext)
    messageContext;
    connectedCallback() {
            this.subscribeToMessageChannel();
            this.handleMapRefresh();
    }
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            TILE_SELECTION_MC,
            (message) => this.handleCustomerSelect(message)
        );
    }
    handleCustomerSelect(message) {
        this.latitude=message.latitude;
        this.longitude=message.longitude;
        alert('child lat-->'+this.latitude+' -- '+JSON.stringify(this.latitude));
        alert('child lang -->'+this.longitude+'  --- '+JSON.stringify(this.longitude));

        cityValues({ selectedCity: this.selectedcity })
            .then((result) => {
                /*this.coordinates = result;
                this.error = undefined;*/
                let mapResult=result.map(task=>{
                    if(task.City__c === this.selectedcity){
                        this.latitude=task.Location__Latitude__s;
                        this.longitude=task.Location__Longitude__s;
                        console.log(' latitude --> '+this.latitude);
                        console.log(' longitude --> '+this.longitude);
                    }
                    return {...task}
                })
                const payload = { latitude : this.latitude , longitude : this.longitude};
                alert('payload-->'+payload);
                alert('Selected val2 -->'+JSON.stringify(payload));
                publish(this.messageContext, CHECK, payload);
            })
            .catch((error) => {
                this.error = error;
                this.coordinates = undefined;
            });
        alert(' coordinates -- '+JSON.stringify(this.coordinates));
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    /**  Map parameters  */
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
        location: { Latitude: this.latitude, Longitude: this.longitude },
    };
}