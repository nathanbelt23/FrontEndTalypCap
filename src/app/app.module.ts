import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  }  from '@angular/common/http';


// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PipesModule } from './pipes/pipes.module';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';





@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    PipesModule,
    TableModule,
    CalendarModule

],
  exports:[

  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
