import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileServiceComponent } from './navbar/navbar.component';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HighlightDirective } from './highlight.directive'

const routes:Routes=[
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileServiceComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
