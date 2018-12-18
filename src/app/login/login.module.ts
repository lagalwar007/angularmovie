import { LoginRoutingModule } from './../login-routing/login-routing.module';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LayoutModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
