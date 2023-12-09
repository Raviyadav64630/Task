import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  data: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getPersonData().subscribe(
      (data: any) => {
        this.data = Object.keys(data).map((key) => ({
          ...data[key],
        }));
      },
      (error) => {
        alert('Error fetching data. Please try again later.');
      }
    );
  }

  showQuotes(person: any): void {
    console.log(person);
    this.router.navigate(['personQuotes'], { state: { person: person } });
  }
}
