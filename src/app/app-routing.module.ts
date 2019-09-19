import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'services', loadChildren: './Pages/services/services.module#ServicesPageModule' },
  { path: 'credit', loadChildren: './Pages/credit/credit.module#CreditPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
