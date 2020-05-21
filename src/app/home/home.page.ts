import { Component } from '@angular/core';
import {NewsFeedService }from '../news-feed.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles :any = [];
  searchTerm:any
  
  constructor(private newsService:NewsFeedService, private iab:InAppBrowser) {
    this.loadNews()

  }
  loadNews(){
    return this.newsService.getNews().subscribe( news =>{
      this.articles = news['articles']
      console.log(this.articles);
    })
  }

  searchNews(){
    return this.newsService.getNewsPerSearch(this.searchTerm).subscribe( news =>{
      this.articles = news['articles']
      console.log(this.articles);
    })
  }

  searchByCategory(ev:any){
    return this.newsService.getNewsPerCat(ev.detail.value).subscribe( news =>{
      this.articles = news['articles']
    })
  }

  readNews(selectedArticle){
    const browser = this.iab.create(selectedArticle.url);
  }
 
}