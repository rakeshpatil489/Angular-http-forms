import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { HttpComponent } from './http/http.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing-component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HttpComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
 

}
