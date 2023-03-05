import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { DescribeComponent } from '../describe/describe.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container.component';
import { ContactCardModule } from '../contact-card/contact-card.module';
import { MaterialModule } from '../material/material.module';
import { ContactCardComponent } from '../contact-card/contact-card.component';



@NgModule({
  exports:[ContainerComponent],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    DescribeComponent,
  ],
  imports: [
    CommonModule,
    ContactCardModule,
    FormsModule,
    MaterialModule
  ]
})
export class ContainerModule { }
