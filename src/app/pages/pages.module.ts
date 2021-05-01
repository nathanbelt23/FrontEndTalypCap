import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { ListActivityComponent } from './list-activity/list-activity.component';
import { ActivityComponent } from './activity/activity.component';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { ListAuthorComponent } from './list-author/list-author.component';
import { AuthorComponent } from './author/author.component';
import { BooksComponen } from './books/books.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { PipesModule } from '../pipes/pipes.module';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    DashboardComponent,
   
    PagesComponent,
    AccountSettingsComponent,
   
    ListActivityComponent,
    ActivityComponent,
    ListAuthorComponent,
    AuthorComponent,
    BooksComponen,
    ListBooksComponent,
    ReportComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    ActivityComponent
  ],
  imports: [ 
    CommonModule,

    SharedModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    PipesModule


  ]
})
export class PagesModule { }
