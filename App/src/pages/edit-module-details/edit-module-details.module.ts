import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditModuleDetailsPage } from './edit-module-details';

@NgModule({
  declarations: [
    EditModuleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditModuleDetailsPage),
  ],
})
export class EditModuleDetailsPageModule {}
