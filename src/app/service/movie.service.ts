import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  public search = new BehaviorSubject<string>('')


    private apiUrl = 'http://localhost:3000/api/movies'
    // private apiUrl = 'https://popcorn-room.onrender.com/api/movies'

      getMovies(): Observable<any> {
      return this.http.get(this.apiUrl);
      }


  getMovieById(id: string | null): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
  }
}
