import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './MyComponents/houses/houses.component';
import { PersonsComponent } from './MyComponents/persons/persons.component';
import { QuotesComponent } from './MyComponents/quotes/quotes.component';
import { DisplayComponent } from './MyComponents/display/display.component';
import { PersonQuotesComponent } from './MyComponents/person-quotes/person-quotes.component';

const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'personQuotes', component: PersonQuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
