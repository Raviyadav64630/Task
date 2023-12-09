import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {
  data: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getHouseData().subscribe((data: any) => {
      this.data = Object.keys(data).map((key) => ({
        ...data[key],
        showMembers: false,
      }));
    });
  }
  showMembers(house: any): void {
    this.router.navigate(['display'], { state: { house: house } });
  }
}
