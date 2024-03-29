import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { CheckLoginGuard } from './guards/check-login.guard';

const routes: Routes = [
  // {
  //   path:"",
  //   canActivate:[CheckLoginGuard],
  //   // component:FullComponent,
  //   children: [
  //     {path:"", redirectTo:"/login", pathMatch:"full"},
  //     {path:"home", component:DashboardComponent},
  //     {path:"alerts", component:AlertsComponent},
  //     {path:"forms", component:FormsComponent},
  //     {path:"table", component:ProductComponent},
  //     {path:"grid-list", component:GridListComponent},
  //     {path:"menu", component:MenuComponent},
  //     {path:"tabs", component:TabsComponent},
  //     {path:"expansion", component:ExpansionComponent},
  //     {path:"chips", component:ChipsComponent},
  //     {path:"progress", component:ProgressComponent},
  //     {path:"toolbar", component:ToolbarComponent},
  //     {path:"progress-snipper", component:ProgressSnipperComponent},
  //     {path:"snackbar", component:SnackbarComponent},
  //     {path:"slider", component:SliderComponent},
  //     {path:"slide-toggle", component:SlideToggleComponent},
  //     {path:"tooltip", component:TooltipsComponent},
  //     {path:"button", component:ButtonsComponent},
  //   ]
  // },
  {
    path:'register',component: RegisterComponent
  },
  { path: 'login',component:LoginComponent},

  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"**", redirectTo:"/login", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
