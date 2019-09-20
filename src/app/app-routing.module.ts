import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'services', loadChildren: './Pages/services/services.module#ServicesPageModule' },
  { path: 'credit', loadChildren: './Pages/credit/credit.module#CreditPageModule' },
  { path: 'settings', loadChildren: './Pages/settings/settings.module#SettingsPageModule' },
  { path: 'tabs', loadChildren: './Pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'profile', loadChildren: './Pages/profile/profile.module#ProfilePageModule' },
  { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
