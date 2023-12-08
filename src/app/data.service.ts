import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getHouseData() {
    return this.http.get('https://api.gameofthronesquotes.xyz/v1/houses');
  }

  getPersonData() {
    return this.http.get('https://api.gameofthronesquotes.xyz/v1/characters');
  }

  getQuoteData() {
    const data = this.http.get(
      'https://api.gameofthronesquotes.xyz/v1/random/5'
    );
    return data;
  }
}
