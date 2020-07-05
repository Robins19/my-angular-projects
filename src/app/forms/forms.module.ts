import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { DescriptionComponent } from './description/description.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { LandingModule } from './landing/landing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    LandingModule,
    MatTabsModule
  ]
})
export class FormsModule { }
