import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { ActivityComponent } from './activity/activity.component';
import { ListActivityComponent } from './list-activity/list-activity.component';
import { AuthorComponent } from './author/author.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BooksComponen} from './books/books.component';
import { SecutyLoginGuard } from '../guards/secuty-login.guard';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [ SecutyLoginGuard],
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },

            { path: 'Activities', component: ListActivityComponent, data: { titulo: 'Activities' } },
            { path: 'Activity/:id', component: ActivityComponent, data: { titulo: 'Activity' } },

            { path: 'Authors', component: ListAuthorComponent , data: { titulo: 'Authors' } },
            { path: 'Author/:id', component: AuthorComponent, data: { titulo: 'Author' } },


            { path: 'Books', component: ListBooksComponent , data: { titulo: 'Authors' } },
            { path: 'Book/:id', component: BooksComponen, data: { titulo: 'Author' } },



            { path: 'Report', component: ReportComponent , data: { titulo: 'Report' } },
         
          
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


