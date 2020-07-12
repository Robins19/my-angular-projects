import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    isDescription: boolean = true;
    isRecommendations: boolean;
    isAnalysis: boolean ;
    isAlternative: boolean ;
    public currentTab: string;
    public arrayall: any = [];

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
            case 'description':
                this.isDescription = true;
                this.isRecommendations = false;
                this.isAnalysis = false;
                this.isAlternative = false;
                break;
            case 'recommendations':
                this.isDescription = false;
                this.isRecommendations = true;
                this.isAnalysis = false;
                this.isAlternative = false;
                break;
            case 'analysis':
                this.isDescription = false;
                this.isRecommendations = false;
                this.isAnalysis = true;
                this.isAlternative = false;
                break;
            case 'alternative':
                this.isDescription = false;
                this.isRecommendations = false;
                this.isAnalysis = false;
                this.isAlternative = true;
                break;

        }
    }


    getDataFromTabs(event) {
        debugger;
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
