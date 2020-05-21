import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http'

const API_URL = environment.API_URL;
const API_Key = environment.API_Key;

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http:HttpClient) { }

   getNews(){
    return this.http.get(`${API_URL}/top-headlines?country=za&apiKey=${API_Key}`)
  }

  getNewsPerSearch(searchTerm){
    return this.http.get(`${API_URL}/top-headlines?q=${searchTerm}&apiKey=${API_Key}`)
  }

  getNewsPerCat(category){
    return this.http.get(`${API_URL}/top-headlines?country=za&category=${category}&apiKey=${API_Key}`)

  }
}
