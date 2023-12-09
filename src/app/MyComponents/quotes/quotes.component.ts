import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getQuoteData().subscribe(
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

  change() {
    this.dataService.getQuoteData().subscribe(
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
}
