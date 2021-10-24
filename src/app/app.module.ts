import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/widget/components/header/header.component';
import { FooterComponent } from './shared/widget/components/footer/footer.component';
import { HomeMainPageComponent } from './shared/widget/components/home-main-page/home-main-page.component';
import { PostPageComponent } from './shared/widget/components/post-page/post-page.component';
import { AboutComponent } from './shared/widget/components/about/about.component';
import { LoaderComponent } from './shared/widget/components/loader/loader.component';
import { SearchComponent } from './shared/widget/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeMainPageComponent,
    PostPageComponent,
    AboutComponent,
    LoaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
