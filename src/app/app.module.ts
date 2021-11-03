import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { QuestionContainerComponent } from './question-container/question-container.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionItemComponent,
    QuestionContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
