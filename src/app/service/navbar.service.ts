import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class NavbarService {

    public visibleSimpleNavbar: boolean;
    public visibleInnerNavbar: boolean;
    public loginVar: boolean = localStorage.getItem('loginType') == '1' ? true : false;
    public LogoutVar: boolean = localStorage.getItem('loginType') == '1' ? false : true;;

    public visibleFooter: boolean;

    constructor() {

    }

    showSimpleNavbar() {
        this.visibleSimpleNavbar = true;
        this.visibleInnerNavbar = false;
    }
    showInnerNavbar() {
        this.visibleSimpleNavbar = false;
        this.visibleInnerNavbar = true;
    }
    hideBothNavbar() {
        this.visibleSimpleNavbar = false;
        this.visibleInnerNavbar = false;
    }
	
    showFooter() {
        this.visibleFooter = true;
    }
    hideFooter() {
        this.visibleFooter = false;
    }

}