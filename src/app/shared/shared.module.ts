import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFlexyModule } from '../demo-flexy-module';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { ComponentsModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DemoFlexyModule,
    FeatherModule.pick(allIcons),

  ]
})
export class SharedModule { }
