import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeButtonComponent } from './type-button/type-button.component';



@NgModule({
  declarations: [
    SideBarComponent,
    TypeButtonComponent
  ],
  exports: [
    SideBarComponent,
    TypeButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
