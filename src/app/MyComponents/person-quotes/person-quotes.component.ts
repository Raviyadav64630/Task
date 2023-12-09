import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-person-quotes',
  templateUrl: './person-quotes.component.html',
  styleUrls: ['./person-quotes.component.scss'],
})
export class PersonQuotesComponent implements OnInit {
  person: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: any) => {
        const personData = window.history.state.person;
        if (personData) {
          this.person = personData;
        }
      },
      (error) => {
        alert('Error fetching data. Please try again later.');
      }
    );
  }

  change(person: any) {
    this.dataService.getQuoteData().subscribe(
      (quotesData: any) => {
        const newQuotesArray = quotesData.map((key: any) => key.sentence);
        this.person = { ...this.person, quotes: newQuotesArray };
      },
      (error) => {
        alert('Error fetching data. Please try again later.');
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
