import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IListAllUsersResponse {
  _id: string,
  username: string,
  password: string,
  mainWhatsapp: string,
  consumers: Array<IConsumer>
}

interface IConsumer {
  _id: string,
  name: string,
  mobileNumber: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersQueriesService {
  private apiUrl: string = 'https:localhost:3000/api/'
  constructor(private httpClient: HttpClient) { }

  public listAllUsers(): Observable<Array<IListAllUsersResponse>> {
    const endpoint = 'users/listAllUsers';
    return this.httpClient.get<Array<IListAllUsersResponse>>(`${this.apiUrl}${endpoint}`);
  }}
