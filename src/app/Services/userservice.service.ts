import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseurl='http://localhost:8080'

  constructor(private http:HttpClient) { }
getUser(){
  return this.http.get('${this.baseurl}/getusers')
}

}
