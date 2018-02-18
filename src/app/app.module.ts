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


import { UserSettingComponent } from './setting-main/user-setting/user-setting.component';
import { EditNamePopup } from './setting-main/user-setting/popup/popup.component';

import { TaskSettingComponent } from './setting-main/task-setting/task-setting.component';
import { ProjectsSettingComponent } from './setting-main/projects-setting/projects-setting.component';
import { CollegesSettingComponent } from './setting-main/colleges-setting/colleges-setting.component';


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
    EditPopup
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
    EditPopup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }