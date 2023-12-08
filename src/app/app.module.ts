import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './MyComponents/houses/houses.component';
import { PersonsComponent } from './MyComponents/persons/persons.component';
import { QuotesComponent } from './MyComponents/quotes/quotes.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './MyComponents/display/display.component';
import { FormsModule } from '@angular/forms';
import { PersonQuotesComponent } from './MyComponents/person-quotes/person-quotes.component';
import { FilterByNamePipe } from './MyComponents/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    PersonsComponent,
    QuotesComponent,
    HeaderComponent,
    DisplayComponent,
    PersonQuotesComponent,
    FilterByNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
