import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card.component';
import { SearchComponent } from './shared/search/search.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from '../add-contact/add-contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewContactComponent } from '../view-contact/view-contact.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  exports: [ContactCardComponent],
  declarations: [
    ContactCardComponent,
    SearchComponent,
    EditContactComponent,
    AddContactComponent,
    ViewContactComponent
  ],
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ContactCardModule { }
