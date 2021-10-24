import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private URL_BLOG_POST: string;

  constructor() { }

  getUrlBlogPostManagement(): string {
    return this.URL_BLOG_POST;
  }

  setUrlBlogPostManagement(url: string) {
    this.URL_BLOG_POST = url;
  }
}
