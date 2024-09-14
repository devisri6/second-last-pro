import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewPageComponent } from './new-page/new-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageCardComponent } from './message-card/message-card.component';
import { UnreadPopupComponent } from './unread-popup/unread-popup.component';

const routes:Routes=[
  {path:'',component:NavBarComponent},
  {path:'newPage',component:NewPageComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewPageComponent,
    MessageCardComponent,
    UnreadPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
