import { Component,AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
    
    ngAfterViewInit(){
        var nav = document.getElementById('navbar');
        window.addEventListener("scroll",function () {
            if (document.documentElement.scrollTop >= 200) {
                nav.classList.add("bg-dark");
                console.log("event fired")
            } else {
                nav.classList.remove("bg-dark");
            }
        })
    }
}
