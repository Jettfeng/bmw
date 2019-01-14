import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { DealerListComponent } from './pages/dealer/dealer-list/dealer-list.component';
import { DealerEditComponent } from './pages/dealer/dealer-edit/dealer-edit.component';
import { DealerCreateComponent } from './pages/dealer/dealer-create/dealer-create.component';
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
import { ProfileEditComponent } from './pages/profile/profile-edit/profile-edit.component';
import { StationEditComponent } from './pages/station/station-edit/station-edit.component';
import { NodeEditComponent } from './pages/node/node-edit/node-edit.component';
import { StationConfigComponent } from './pages/station/station-config/station-config.component';
import { NodeConfigComponent } from './pages/node/node-config/node-config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full',
  },{
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },{
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard]
  },{
    path: 'dealer',
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: DealerListComponent },
      { path: 'create', component: DealerCreateComponent },
      { path: 'edit/:dealerId', component: DealerEditComponent },
      { path: 'information/:dealerId', component: DealerInformationComponent },
      { 
        path: 'config', 
        children: [
          { path: 'notification/:dealerId', component: DealerConfigNotificationComponent },
          { path: 'beacon/:dealerId', component: BeaconListComponent },
        ]
      }
    ]
  },{
    path: 'station',
    canActivate: [AuthGuard],
    children: [
      { path: 'config/:dealerId', component: StationConfigComponent },
      { path: 'edit/:dealerId/:stationId', component: StationEditComponent },
    ]
  },{
    path: 'node',
    canActivate: [AuthGuard],
    children: [
      { path: 'config/:dealerId', component: NodeConfigComponent },
      { path: 'edit/:dealerId/:nodeId', component: NodeEditComponent },
    ]
  },{
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      { path: 'list/:dealerId', component: UserListComponent },
      { path: 'create/:dealerId', component: UserCreateComponent },
      { path: 'edit/:dealerId/:userId', component: UserEditComponent },
    ]
  },{
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      { path: 'car/:dealerId', component: CarDashboardComponent },
      { path: 'timeline/:dealerId/:carId', component: CarTimelineComponent },
      { 
        path: 'config', 
        children: [
          { path: 'notification/:dealerId', component: CarConfigNotificationComponent },
        ]
      }
    ]
  },{
    path: 'data',
    canActivate: [AuthGuard],
    children: [
      { path: 'export/:dealerId', component: DataExportComponent },
    ]
  },{
    path: 'beacon',
    canActivate: [AuthGuard],
    children: [
      { path: 'list/:dealerId', component: BeaconListComponent },
      { path: 'register/:dealerId', component: BeaconRegisterComponent },
      { path: 'edit/:dealerId/:beaconId', component: BeaconEditComponent },
    ]
  },{
    path: 'car',
    canActivate: [AuthGuard],
    children: [
      { path: 'list/:dealerId', component: CarListComponent },
      { path: 'register/:dealerId', component: CarRegisterComponent },
      { path: 'edit/:dealerId/:carId', component: CarEditComponent },
    ]
  },{
    path: 'profile',
    canActivate: [AuthGuard],
    children: [
      { path: 'edit', component: ProfileEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
