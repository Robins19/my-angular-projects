import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookingTabsUiDataModel } from '../interface';
import { DataShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  @Output() dataFromRecommendations = new EventEmitter();
  public bookingTabsUiDataObj: BookingTabsUiDataModel = <BookingTabsUiDataModel>{};
  constructor(public dataShareService:DataShareService) { }

  ngOnInit(): void {
  }

  onClick(){
    var dataObj = Object.assign({}, this.bookingTabsUiDataObj);
     dataObj.uiName = "analysis";
    this.dataFromRecommendations.emit(dataObj);
  }

}
