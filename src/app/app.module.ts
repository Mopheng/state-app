import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StateListComponent } from './state-list/state-list.component';
import {HttpCallService} from './http-call.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchStatePipe } from './pipes/search-state.pipe';



@NgModule({
  declarations: [
    AppComponent,
    StateListComponent,
    SearchStatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpCallService],
  bootstrap: [AppComponent],
  exports: [SearchStatePipe]
})
export class AppModule { }
