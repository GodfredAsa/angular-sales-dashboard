import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SalesDashboardComponent } from './pages/sales-dashboard/sales-dashboard.component';
import { ItemMetricsComponent } from './components/item-metrics/item-metrics.component';
import { SalesTrendComponent } from './components/sales-trend/sales-trend.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SalesDashboardComponent,
    ItemMetricsComponent,
    SalesTrendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
