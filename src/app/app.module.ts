import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/widget/components/header/header.component';
import { FooterComponent } from './shared/widget/components/footer/footer.component';
import { HomeMainPageComponent } from './shared/widget/components/home-main-page/home-main-page.component';
import { PostPageComponent } from './shared/widget/components/post-page/post-page.component';
import { AboutComponent } from './shared/widget/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeMainPageComponent,
    PostPageComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
