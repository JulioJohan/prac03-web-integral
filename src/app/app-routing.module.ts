import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  // {
  //   path:"",
  //   component:FullComponent,
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
