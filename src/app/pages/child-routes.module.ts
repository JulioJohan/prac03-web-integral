import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AlertsComponent } from '../components/alerts/alerts.component';
import { FormsComponent } from '../components/forms/forms.component';
import { ProductComponent } from '../dashboard/dashboard-components/product/product.component';
import { GridListComponent } from '../components/grid-list/grid-list.component';
import { MenuComponent } from '../components/menu/menu.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { ChipsComponent } from '../components/chips/chips.component';
import { ExpansionComponent } from '../components/expansion/expansion.component';
import { ProgressComponent } from '../components/progress/progress.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { ProgressSnipperComponent } from '../components/progress-snipper/progress-snipper.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { SliderComponent } from '../components/slider/slider.component';
import { TooltipsComponent } from '../components/tooltips/tooltips.component';
import { SlideToggleComponent } from '../components/slide-toggle/slide-toggle.component';
import { ButtonsComponent } from '../components/buttons/buttons.component';

const childRoutes:Routes = [
  {path:"home", component:HomeComponent},
  {path:"alerts", component:AlertsComponent},
  {path:"forms", component:FormsComponent},
  {path:"table", component:ProductComponent},
  {path:"grid-list", component:GridListComponent},
  {path:"menu", component:MenuComponent},
  {path:"tabs", component:TabsComponent},
  {path:"expansion", component:ExpansionComponent},
  {path:"chips", component:ChipsComponent},
  {path:"progress", component:ProgressComponent},
  {path:"toolbar", component:ToolbarComponent},
  {path:"progress-snipper", component:ProgressSnipperComponent},
  {path:"snackbar", component:SnackbarComponent},
  {path:"slider", component:SliderComponent},
  {path:"slide-toggle", component:SlideToggleComponent},
  {path:"tooltip", component:TooltipsComponent},
  {path:"button", component:ButtonsComponent},
  
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
