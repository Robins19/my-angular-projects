import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

 
  public activeTab: string = "services";

  public isServicesColor: boolean=false;
  public isScheduleColor: boolean=false;
  public isAddressColor: boolean=false;
  public isMaidsColor: boolean=false;
  public isPaymentColor: boolean=false;


  @Input('activeTab')
  set tabsData(activeTab: string) {
      if (activeTab) {
          this.activeTab = activeTab;
          this.tabDecoration(this.activeTab);
      }
  }

  constructor(

  ) {

  }


  tabDecoration(activeTab: string) {
      switch (activeTab) {
          case 'services':
              break;
          case 'schedule':
              this.isServicesColor = true;
              this.isScheduleColor = false;
              this.isAddressColor = false;
              this.isMaidsColor = false;
              this.isPaymentColor = false;
              break;
          case 'address':
              this.isServicesColor = true;
              this.isScheduleColor = true;
              this.isAddressColor = false;
              this.isMaidsColor = false;
              this.isPaymentColor = false;
              break;
          case 'maids':
              this.isServicesColor = true;
              this.isScheduleColor = true;
              this.isAddressColor = true;
              this.isMaidsColor = false;
              this.isPaymentColor = false;
              break;
          case 'payment':
              this.isServicesColor = true;
              this.isScheduleColor = true;
              this.isAddressColor = true;
              this.isMaidsColor = true;
              this.isPaymentColor = false;
              break;
      }
  }



  ngOnInit() {

  }


  ngOnDestroy() {

  }

}
