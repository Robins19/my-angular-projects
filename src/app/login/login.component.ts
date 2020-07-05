import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(  private navbarSvc: NavbarService,) { }

  ngOnInit(): void {
    this.navbarSvc.hideBothNavbar()
    this.navbarSvc.hideFooter();
  }

}
