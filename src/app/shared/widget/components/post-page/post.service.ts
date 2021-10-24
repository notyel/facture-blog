import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ConfigService } from '../../../services/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlAllPost: string;
  private urlComments: string;
  private urlUserBlog: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {
    this.urlAllPost = 'posts';
    this.urlComments = 'posts/{0}/comments';
    this.urlUserBlog = 'users'
  }

  public getPosts(): Observable<any> {
    return this.httpService.Get(
      this.configService.getUrlBlogPostManagement() + this.urlAllPost,
    );
  }

  public getPost(postId: number): Observable<any> {
    return this.httpService.Get(
      `${this.configService.getUrlBlogPostManagement()}${this.urlAllPost}/${postId}`,
    );
  }

  public getCommentsPost(postId: number): Observable<any> {
    return this.httpService.Get(
      `${this.configService.getUrlBlogPostManagement()}${this.urlComments.replace("{0}", postId.toString())}`,
    );
  }

  public getUserBlog(userPostId: number): Observable<any> {
    return this.httpService.Get(
      `${this.configService.getUrlBlogPostManagement()}${this.urlUserBlog}/${userPostId}`,
    );
  }

}
