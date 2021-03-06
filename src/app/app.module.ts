import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { TopBrNvComponent } from './top-br-nv/top-br-nv.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { StudentRegisterComponent } from './dashboard/student-register/student-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ReactiveFormsModule, FormsModule } from '@angular/forms';


// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { NgChartjsModule } from 'ng-chartjs';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopBrNvComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    LogoutComponentComponent,
    
    
    // ReactiveFormsModule,
    // FormsModule
    // NgChartjsModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ToastrModule.forRoot(),
  BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
