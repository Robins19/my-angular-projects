import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DescriptionComponent } from '../description/description.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';
import { TabsComponent } from '../tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AnalysisComponent } from '../analysis/analysis.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


export const routes: Routes = [
  { path: '', component: LandingComponent, data: { title: "Demo Booking | Demo.Today" } },
];

@NgModule({
  declarations: [
    LandingComponent,
    DescriptionComponent,
    RecommendationComponent,
    AnalysisComponent,
TabsComponent 

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingModule { }
