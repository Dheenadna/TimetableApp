import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModuleDetailPage } from './module-detail';

@NgModule({
  declarations: [
    ModuleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ModuleDetailPage),
  ],
})
export class ModuleDetailPageModule {}
