import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import {SettingMainComponent} from './setting-main/setting-main.component';
import {DeletePopup} from './popups/delete/popup-delete.component';
import {EditPopup} from './popups/edit/popup-edit.component';
import {EditQuickTaskPopup} from './popups/edit-quick-task/popup-edit-quick-task.component';
import {EditDescriptionPopup} from './popups/edit-description/popup-edit-description.component';
import {EditProjectPopup} from './popups/edit-project/popup-edit-project.component';


import {UserSettingComponent} from './setting-main/user-setting/user-setting.component';
import {EditNamePopup} from './setting-main/user-setting/popup/popup.component';

import {TaskSettingComponent} from './setting-main/task-setting/task-setting.component';
import {ProjectsSettingComponent} from './setting-main/projects-setting/projects-setting.component';
import {CollegesSettingComponent} from './setting-main/colleges-setting/colleges-setting.component';
import {TimerComponent} from './timer/timer.component';
import {Localstore} from "./service/localstore.service";
import {TimerService} from "./timer/timer.service";
import {IconCanvasService} from "./service/icon-canvas.service";
import {ConnectionPopup} from "./popups/conection/popup-conection.component";
import {EditTimePopup} from "./popups/edit-time/popup-edit-time.component";
import {Api} from './service/api.service';
import {HttpClientModule} from '@angular/common/http';
import {QRCodeModule} from 'angularx-qrcode';
import {QrcodePopup} from './popups/qrcode/popup-qrcode.component';
import {Sinc} from './service/sinc.service';
import {SincPageComponent} from './sinc-page/sinc-page.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import {appReducers} from "./store/reducers/app.reducers";
import {UserEffects} from "./store/effects/user.effects";
import {ConfigEffects} from "./store/effects/config.effects";
import {environment} from "../environments/environment.prod";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SettingMainComponent,
    UserSettingComponent,
    TaskSettingComponent,
    ProjectsSettingComponent,
    CollegesSettingComponent,
    EditNamePopup,
    DeletePopup,
    EditPopup,
    EditQuickTaskPopup,
    EditDescriptionPopup,
    EditProjectPopup,
    ConnectionPopup,
    EditTimePopup,
    QrcodePopup,
    TimerComponent,
    SincPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    QRCodeModule,

    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  entryComponents: [
    EditNamePopup,
    DeletePopup,
    EditPopup,
    EditQuickTaskPopup,
    EditDescriptionPopup,
    EditProjectPopup,
    ConnectionPopup,
    EditTimePopup,
    QrcodePopup
  ],
  providers: [Localstore, TimerService, IconCanvasService, Api, Sinc],
  bootstrap: [AppComponent]
})
export class AppModule {
}
