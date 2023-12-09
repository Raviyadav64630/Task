import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    return throwError('Something went wrong. Please try again later.');
  }

  getHouseData() {
    return this.http
      .get('https://api.gameofthronesquotes.xyz/v1/houses')
      .pipe(catchError(this.handleError));
  }

  getPersonData() {
    return this.http
      .get('https://api.gameofthronesquotes.xyz/v1/characters')
      .pipe(catchError(this.handleError));
  }

  getQuoteData() {
    return this.http
      .get('https://api.gameofthronesquotes.xyz/v1/random/5')
      .pipe(catchError(this.handleError));
  }
}
