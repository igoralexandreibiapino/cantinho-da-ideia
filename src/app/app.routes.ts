import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [{path: 'home', component: HomeComponent},
    {path: 'post-form', component: PostFormComponent},
    {path: '', component: AppComponent}
];
