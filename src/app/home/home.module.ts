// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";

// This Module's Components
import { HomeComponent } from './home.component';
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ScreenComponent } from "./screen/screen.component";


@NgModule({
    imports: [
        HomeRoutingModule,CommonModule
    ],
    declarations: [
        HomeComponent, ContactComponent, FooterComponent, NavbarComponent, ScreenComponent
    ],
    providers :[

    ]
})
export class HomeModule {

}
