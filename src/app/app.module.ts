import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RepoviewComponent } from './components/repoview/repoview.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DashboardComponent,
    RepoviewComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
