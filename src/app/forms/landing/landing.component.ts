import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    public isServices: boolean = true;
    public isSchedule: boolean;
    public isAddress: boolean;
    public isMaids: boolean;
    public isPayment: boolean;
    public currentTab: string;
    public arrayall: any=[];

    constructor(
        private router: Router,
        private navbarSvc: NavbarService,
    ) {
        this.navbarSvc.showSimpleNavbar();
        this.navbarSvc.showFooter();
    }
    ngOnInit() {
    }


    getUiPartToShow(uiPart) {
        switch (uiPart) {
            case 'services':
                this.isServices = true;
                this.isSchedule = false;
                this.isAddress = false;
                this.isMaids = false;
                this.isPayment = false;
                break;
            case 'schedule':
                this.isServices = false;
                this.isSchedule = true;
                this.isAddress = false;
                this.isMaids = false;
                this.isPayment = false;
                break;
            case 'address':
                this.isServices = false;
                this.isSchedule = false;
                this.isAddress = true;
                this.isMaids = false;
                this.isPayment = false;
                break;
            case 'maids':
                this.isServices = false;
                this.isSchedule = false;
                this.isAddress = false;
                this.isMaids = true;
                this.isPayment = false;
                break;
            case 'payment':
                this.isServices = false;
                this.isSchedule = false;
                this.isAddress = false;
                this.isMaids = false;
                this.isPayment = true;
                break;
        }
    }


    getDataFromTabs(event) {
        this.currentTab = event.uiName;
        this.getUiPartToShow(event.uiName);
    }
    onBackEvent(event) {
        this.currentTab = event;
        this.getUiPartToShow(event);
    }
    
    ngOnDestroy() {

    }

}
