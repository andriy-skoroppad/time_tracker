import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatAutocompleteModule,
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
MatFormFieldModule,} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingMainComponent } from './setting-main/setting-main.component';
import { DeletePopup } from './popups/delete/popup-delete.component';
import { EditPopup } from './popups/edit/popup-edit.component';
import { EditQuickTaskPopup } from './popups/edit-quick-task/popup-edit-quick-task.component';
import { EditDescriptionPopup } from './popups/edit-description/popup-edit-description.component';
import { EditProjectPopup } from './popups/edit-project/popup-edit-project.component';


import { UserSettingComponent } from './setting-main/user-setting/user-setting.component';
import { EditNamePopup } from './setting-main/user-setting/popup/popup.component';

import { TaskSettingComponent } from './setting-main/task-setting/task-setting.component';
import { ProjectsSettingComponent } from './setting-main/projects-setting/projects-setting.component';
import { CollegesSettingComponent } from './setting-main/colleges-setting/colleges-setting.component';
import { TimerComponent } from './timer/timer.component';
import {Localstore} from "./service/localstore.service";
import {TimerService} from "./timer/timer.service";
import {IconCanvasService} from "./service/icon-canvas.service";
import {ConnectionPopup} from "./popups/conection/popup-conection.component";


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
    TimerComponent
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
    MatFormFieldModule
  ],
  entryComponents: [
    EditNamePopup,
    DeletePopup,
    EditPopup,
    EditQuickTaskPopup,
    EditDescriptionPopup,
    EditProjectPopup,
    ConnectionPopup
  ],
  providers: [Localstore, TimerService, IconCanvasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
