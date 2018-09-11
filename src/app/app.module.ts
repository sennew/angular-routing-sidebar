import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Product } from './products/product.component';
import { Users } from './users/user.component';

const appRoutes: Routes = [
  { path: 'products', component: Product },
  { path: 'users', component: Users}
];

@NgModule({
  declarations: [
    AppComponent,
    Product,
    Users
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
