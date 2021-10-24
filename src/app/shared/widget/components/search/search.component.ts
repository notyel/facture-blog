import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StatusCodeEnum } from 'src/app/shared/enums/StatusCode.enum';
import { post } from 'src/app/shared/interfaces/post.metadata';
import { PostService } from '../post-page/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public searchPostText: string;
  public isLoading = false;
  public postsList: post[];
  public postsFilterList: post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.searchPostText = params['searchPost']
      });

    this.loadAllPost();
  }

  public searchPost(searchPost: string): void {
    if (searchPost.length < 1) { 
      return;
    }
    
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/search',  searchPost]));

   // this.router.navigate(['/search',  searchPost]);
  }

  private loadAllPost(): void {
    this.isLoading = true;
    const oPosts = this.postService.getPosts();
    forkJoin([oPosts]).subscribe(([postsResponse]) => {
      // Carga Post
      if (postsResponse.status === StatusCodeEnum.Ok) {
        this.postsList = postsResponse.body;

        this.postsList.forEach(post => {
          if (post.title.indexOf(this.searchPostText) >= 0) {
            debugger;
            console.log(post);
            this.postsFilterList.push(post);
          }
        });
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
