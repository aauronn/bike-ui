import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
// import { CallbackComponent } from './components/callback/callback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'admin/view/:id', component: ViewRegistrationComponent, canActivate: [AuthGuard] },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/view/:id', component: ViewRegistrationComponent },
  { path: 'admin', component: AdminComponent },
  // { path: 'callback', component: CallbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
