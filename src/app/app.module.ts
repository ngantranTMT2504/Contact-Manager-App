import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DescribeComponent } from './describe/describe.component';
import { ContainerComponent } from './container/container.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescribeComponent,
    ContainerComponent,
    ContactCardComponent,
    SearchComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
