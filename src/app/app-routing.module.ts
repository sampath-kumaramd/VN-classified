import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PostAdComponent } from './components/pages/post-ad/post-ad.component';
import { PostAdSuccessComponent } from './components/pages/post-ad-success/post-ad-success.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { AdPageComponent } from './components/pages/ad-page/ad-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component: HomePageComponent},
  {path:'post-ad', component: PostAdComponent},
  {path:'post-ad-success', component: PostAdSuccessComponent},
  {path:'category/:category', component: CategoryPageComponent},
  {path: 'ad/:id', component: AdPageComponent},
  // {path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
