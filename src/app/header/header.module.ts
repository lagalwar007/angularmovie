import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule, 
         MatIconModule,
         MatCardModule,
         MatMenuModule,
         MatButtonModule} from "@angular/material";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
