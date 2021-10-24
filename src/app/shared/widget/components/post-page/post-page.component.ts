import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PostService } from './post.service'
import { StatusCodeEnum } from 'src/app/shared/enums/StatusCode.enum';
import { ActivatedRoute } from '@angular/router';
import { post } from 'src/app/shared/interfaces/post.metadata';
import { comment } from 'src/app/shared/interfaces/comment.metadata';
import { userBlog } from 'src/app/shared/interfaces/user-blog.metadata';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit {
  public isLoading: boolean = false;
  public postId: number;
  public post: post;
  public comments: comment[];
  public userBlog: userBlog;
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      parameters => {
        this.postId = parameters['id']
      });

    this.loadPost(this.postId);
  }

  private loadPost(postId: number): void {
    this.isLoading = true;
    const oPost = this.postService.getPost(postId);
    const oCommentsPost = this.postService.getCommentsPost(postId);
    const oUserBlog = this.postService.getUserBlog(postId);
    forkJoin([oPost, oCommentsPost]).subscribe(([postsResponse, commentsPostResponse]) => {
      // Carga el post
      if (postsResponse.status === StatusCodeEnum.Ok) {
        this.post = postsResponse.body;
      }

      if (commentsPostResponse.status === StatusCodeEnum.Ok) {
        this.comments = commentsPostResponse.body;
      }

      this.loadUserPost();
    }, error => {
      throw error;
    });
  }

  private loadUserPost(): void {
    const oUserBlog = this.postService.getUserBlog(this.post.userId);
    forkJoin([oUserBlog]).subscribe(([userBlogResponse]) => {
      if (userBlogResponse.status === StatusCodeEnum.Ok) {
        this.userBlog = userBlogResponse.body;
      }
      // Quitar en produccion: Efecto de cargando 
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }, error => {
      throw error;
    });
  }


}
