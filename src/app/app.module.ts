import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarService } from './services/car.service';
import { RouterModule, Routes } from '@angular/router';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { UberunsComponent } from './components/uberuns/uberuns.component';
import { AnmeldenComponent } from './components/anmelden/anmelden.component';
import { MietenComponent } from './components/mieten/mieten.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'uberuns', component: UberunsComponent },
  { path: 'anmelden', component: AnmeldenComponent },
  { path: 'mieten', component: MietenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'checkout/:id', component: CheckoutComponent, pathMatch:"full"}
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoute), NgbModule],
  declarations: [
    AppComponent,
    HomeComponent,
    CarCardComponent,
    FilterModalComponent,
    KontaktComponent,
    UberunsComponent,
    AnmeldenComponent,
    MietenComponent,
    DashboardComponent,
    FilterModalComponent,
    CheckoutComponent
  ],
  bootstrap: [AppComponent],
  providers: [CarService],
})
export class AppModule {}
