import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DemoFlexyModule } from './demo-flexy-module';
import { allIcons } from 'angular-feather/icons';
import { MatSnackBarModule } from '@angular/material/snack-bar';






const modulos: any[] = [
    FeatherModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule,
     

]


@NgModule({
    declarations: [],
    imports: [
        DemoFlexyModule,
        FeatherModule.pick(allIcons),
        // MatSnackBarModule 
        ...modulos
    ],
    exports: [
        DemoFlexyModule,
        // FeatherModule.pick(allIcons)
    ]
})
export class MaterialModule { }
