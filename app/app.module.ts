import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { DishdetailComponent } from "./dishdetail/dishdetail.component";
import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';
import { DrawerComponent } from './shared/drawer/drawer.component';

import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { baseURL } from './shared/baseurl';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        DishdetailComponent,
        DrawerComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [
        DishService,
        ProcessHTTPMsgService,
        LeaderService,
        PromotionService,
        { provide: 'BaseURL', useValue: baseURL }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }