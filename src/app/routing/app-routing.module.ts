import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from '../main-page/main-page.component';
import { SettingMainComponent } from '../setting-main/setting-main.component';

import { CollegesSettingComponent } from '../setting-main/colleges-setting/colleges-setting.component';
import { ProjectsSettingComponent } from '../setting-main/projects-setting/projects-setting.component';
import { TaskSettingComponent } from '../setting-main/task-setting/task-setting.component';
import { UserSettingComponent } from '../setting-main/user-setting/user-setting.component';



import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'setting', component: SettingMainComponent },
  { path: 'setting/colleges', component: CollegesSettingComponent },
  { path: 'setting/projects', component: ProjectsSettingComponent },
  { path: 'setting/tasks', component: TaskSettingComponent },
  { path: 'setting/user', component: UserSettingComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
