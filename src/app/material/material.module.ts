import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
