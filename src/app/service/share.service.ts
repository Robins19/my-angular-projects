import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataShareService {

  public dataSource = new BehaviorSubject({"maindservice":{},"schedule":{},"address":{},"maids":{},"bookmaid":{}});
  currentMessage = this.dataSource.asObservable();

  constructor() { }

  changeData(allDatavar: any) {
    this.dataSource.next(allDatavar)
  }

}