import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfitComponent } from './components/profit/profit.component';
import { EarningComponent } from './components/earning/earning.component';
import { CompanyStatsComponent } from './components/company-stats/company-stats.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RevenueReportComponent } from './components/revenue-report/revenue-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    StatisticsComponent,
    CongratulationsComponent,
    OrdersComponent,
    ProfitComponent,
    EarningComponent,
    CompanyStatsComponent,
    CalendarComponent,
    RevenueReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
