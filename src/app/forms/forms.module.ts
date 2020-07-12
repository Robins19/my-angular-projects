import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingModule } from './landing/landing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AlternativesComponent } from './alternatives/alternatives.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ AlternativesComponent],
  imports: [
    CommonModule,
    LandingModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class FormsModule { }
