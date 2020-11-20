import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactusComponent } from './pages/contactus/contactus.component';
import { LoginComponent } from './pages/login/login.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResearchComponent } from './pages/research/research.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./pages/landingpage/landingpage.module').then( m => m.LandingpageModule), pathMatch: 'full'},
  { path: 'product-terminal', loadChildren: () => import('./pages/product-terminal/product-terminal.module').then( m => m.ProductTerminalModule)},
  { path: 'product-tradelab', loadChildren: () => import('./pages/product-tradelab/product-tradelab.module').then( m => m.ProductTradelabModule)},
  { path: 'product-message', loadChildren: () => import('./pages/product-message/product-message.module').then( m => m.ProductMessageModule)},
  { path: 'about-company', loadChildren: () => import('./pages/about-company/about-company.module').then( m => m.AboutCompanyModule)},
  { path: 'about-career', loadChildren: () => import('./pages/about-careers/about-careers.module').then( m => m.AboutCareersModule)},
  { path: 'about-investor', loadChildren: () => import('./pages/about-investor/about-investor.module').then( m => m.AboutInvestorModule)},
  
  { path: 'resarch', component: ResearchComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'contact', component: ContactusComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
