import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookingTabsUiDataModel } from '../interface';
import { DataShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Output() dataFromDescription = new EventEmitter();
  public bookingTabsUiDataObj: BookingTabsUiDataModel = <BookingTabsUiDataModel>{};
  constructor(public dataShareService:DataShareService) { }

  ngOnInit(): void {
  }


  onClick(){
    var dataObj = Object.assign({}, this.bookingTabsUiDataObj);
     dataObj.uiName = "recommendations";
    this.dataFromDescription.emit(dataObj);
  }
}
