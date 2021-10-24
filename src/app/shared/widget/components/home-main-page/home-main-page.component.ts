import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { StatusCodeEnum } from 'src/app/shared/enums/StatusCode.enum';
import { PostService } from '../post-page/post.service';
import { post } from 'src/app/shared/interfaces/post.metadata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main-page',
  templateUrl: './home-main-page.component.html'
})
export class HomeMainPageComponent implements OnInit {
  public isLoading = false;
  public postsList: post[];

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllPost();
  }

  private loadAllPost(): void {
    this.isLoading = true;
    const oPosts = this.postService.getPosts();
    forkJoin([oPosts]).subscribe(([postsResponse]) => {
      // Carga Post
      if (postsResponse.status === StatusCodeEnum.Ok) {
        this.postsList = postsResponse.body;
      }

      // Quitar en produccion: Efecto de cargando 
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }, error => {
      throw error;
    });
  }

  public searchPost(searchPost: string): void {
    if (searchPost.length < 1) { 
      return;
    }
    
    this.router.navigate(['/search',  searchPost]);
  }
}
