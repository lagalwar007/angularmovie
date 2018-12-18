import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports:[
    HeaderModule,
    FooterModule
  ]
})
export class LayoutModule { }
