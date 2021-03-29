import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  getTodos(){
    return this.httpClient.get(`${this.REST_API_SERVER}/todos`);
  }
}
