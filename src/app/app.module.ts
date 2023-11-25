import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { PrimeFacesModule } from 'src/primefaces.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './part/navbar/navbar.component';
import { AdvertistmentComponent } from './part/advertistment/advertistment.component';
import { PriceService } from './service/price.service';
import { SkeletonComponent } from './part/skeleton/skeleton.component';
import { SidebarComponent } from './part/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdvertistmentComponent,
    SkeletonComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeFacesModule,
    FormsModule,
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
