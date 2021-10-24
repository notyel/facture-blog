import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PostService } from './post.service'
import { StatusCodeEnum } from 'src/app/shared/enums/StatusCode.enum';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit {
  public isLoading = false;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadBasicData();
  }

  private loadBasicData(): void {
    this.isLoading = true;
    const oPosts = this.postService.getPosts();
    forkJoin([oPosts]).subscribe(([PostsResponse]) => {
        // Carga Post
        if (PostsResponse.status === StatusCodeEnum.Ok) {
          console.log(PostsResponse);
        }

        this.isLoading = false;
    }, error => {
        throw error;
    });
  }
}
