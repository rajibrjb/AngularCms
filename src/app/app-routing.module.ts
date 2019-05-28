// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: HomeComponent },
  { path: 'vividdigital',        component: HomeComponent },
  { path: '',   redirectTo: '/vividdigital', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
