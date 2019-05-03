import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

const COMPONENTS = [NavbarComponent]

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: COMPONENTS,
  exports: [...COMPONENTS, AppRoutingModule]
})
export class CoreModule { }
