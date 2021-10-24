import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ConfigService } from '../../../services/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlAllPost: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {
    this.urlAllPost = 'posts';
  }

  public getPosts(): Observable<any> {
    return this.httpService.Get(
      this.configService.getUrlBlogPostManagement() + this.urlAllPost,
    );
  }
}
