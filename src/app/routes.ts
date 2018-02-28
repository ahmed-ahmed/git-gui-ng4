import { Routes } from '@angular/router';
import {RepoListComponent} from './repo-list/repo-list.component'
export const AppRoute: Routes = [
    {
        path: 'repo-list',
        component: RepoListComponent,
        // data: {
        //     authorities: ['ROLE_USER'],
        //     pageTitle: 'accountantApp.journal.home.title'
        // },
        // canActivate: [UserRouteAccessService]
    }
 ] 
