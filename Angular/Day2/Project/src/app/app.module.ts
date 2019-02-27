import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from 'src/app/hello/hello.component';
import { TopicComponent } from './topic/topic.component';
import { ContactComponent } from './contact/contact.component';
import { HelloService } from 'src/app/hello/helloService';
import { ContactService } from 'src/app/contact/contactService';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes:Routes=[
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'hello',component:HelloComponent},
  {path:'topic',component:TopicComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,HelloComponent, TopicComponent, ContactComponent, HomeComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [HelloService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
