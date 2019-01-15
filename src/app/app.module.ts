import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../app/interceptors/error.interceptor';
import { HeaderInterceptor } from '../app/interceptors/header.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AuthGuard } from './guard/auth.guard';

import { LoginComponent } from './pages/auth/login/login.component';
import { DealerListComponent } from './pages/dealer/dealer-list/dealer-list.component';
import { DealerEditComponent } from './pages/dealer/dealer-edit/dealer-edit.component';
import { DealerCreateComponent } from './pages/dealer/dealer-create/dealer-create.component';
import { HeaderComponent } from './components/header/header.component';
import { Header_nComponent } from './components/header_n/header_n.component';
import { DealerInformationComponent } from './pages/dealer/dealer-information/dealer-information.component';
import { DealerConfigNotificationComponent } from './pages/dealer/dealer-config-notification/dealer-config-notification.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { CarDashboardComponent } from './pages/dashboard/car-dashboard/car-dashboard.component';
import { CarTimelineComponent } from './pages/dashboard/car-timeline/car-timeline.component';
import { CarConfigNotificationComponent } from './pages/dashboard/car-config-notification/car-config-notification.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { DataExportComponent } from './pages/data/data-export/data-export.component';
import { BeaconListComponent } from './pages/beacon/beacon-list/beacon-list.component';
import { BeaconRegisterComponent } from './pages/beacon/beacon-register/beacon-register.component';
import { BeaconEditComponent } from './pages/beacon/beacon-edit/beacon-edit.component';
import { CarRegisterComponent } from './pages/car/car-register/car-register.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { ProfileEditComponent } from './pages/profile/profile-edit/profile-edit.component';
import { ProfilePwdComponent } from './pages/profile/profile-pwd/profile-pwd.component';
import { StationEditComponent } from './pages/station/station-edit/station-edit.component';
import { NodeEditComponent } from './pages/node/node-edit/node-edit.component';
import { StationConfigComponent } from './pages/station/station-config/station-config.component';
import { NodeConfigComponent } from './pages/node/node-config/node-config.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DealerListComponent,
    DealerEditComponent,
    DealerCreateComponent,
    HeaderComponent,
    Header_nComponent,
    DealerInformationComponent,
    DealerConfigNotificationComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    CarDashboardComponent,
    CarTimelineComponent,
    CarConfigNotificationComponent,
    MenuComponent,
    DataExportComponent,
    BeaconListComponent,
    BeaconRegisterComponent,
    BeaconEditComponent,
    CarRegisterComponent,
    CarListComponent,
    CarEditComponent,
    FooterComponent,
    ConfirmModalComponent,
    ConfirmDeleteModalComponent,
    ProfileEditComponent,
    StationEditComponent,
    NodeEditComponent,
    StationConfigComponent,
    NodeConfigComponent
    ,
    ProfilePwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    } ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
