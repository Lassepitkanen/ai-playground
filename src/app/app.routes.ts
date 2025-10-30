import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'AI Playground',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About — AI Playground',
    },
    {
        path: '**',
        redirectTo: '',
    },
];
