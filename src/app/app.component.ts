import { Component } from '@angular/core';
import { ConfigService } from './shared/services/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'facture-posts';

  constructor(
    private configService: ConfigService
  ) {
    this.configService.setUrlBlogPostManagement(environment.URL_BLOG_POST);
  }
}
