import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MsalModule } from "@azure/msal-angular";
import { SeguridadComponent } from './seguridad/seguridad.component';

@NgModule({
  declarations: [
    AppComponent,
    SeguridadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot({
      auth:{
        clientId:"<colocar application(client) ID>",
        authority:"https://login.microsfotonline.com/<colocar Directory(tenant) ID>/",
        validateAuthority:true,
        redirectUri:"http://localhost:4200"
      },
      cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie:false
      }
    },{
      consentScopes:[
        "user.read","openid","profile"
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
