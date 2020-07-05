import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {

  MatCardModule,

} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {

  MatTabsModule,

} from '@angular/material/tabs';
import {

  MatFormFieldModule,

} from '@angular/material/form-field';
import {
  MatInputModule,
} from '@angular/material/input';
import {

  MatButtonModule,

} from '@angular/material/button';
import {

  MatCheckboxModule,

} from '@angular/material/checkbox';
import {
  MatIconModule
} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './service/navbar.service';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridComponent } from './forms/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
