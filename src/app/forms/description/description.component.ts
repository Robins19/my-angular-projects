import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDescription } from '../interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Output() dataFromServices = new EventEmitter<IDescription>();

  constructor() { }

  ngOnInit(): void {
  }

}
