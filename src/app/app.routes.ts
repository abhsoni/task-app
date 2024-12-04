import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
     {path:"user",component:UserPageComponent},
     {path:"home",component:HomePageComponent},
     { path: '',   redirectTo: '/home', pathMatch: 'full' }
    // { path: '',   redirectTo: '/user', pathMatch: 'full' }
];
