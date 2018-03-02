import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimetableviewPage } from './timetableview';

@NgModule({
  declarations: [
    TimetableviewPage,
  ],
  imports: [
    IonicPageModule.forChild(TimetableviewPage),
  ],
})
export class TimetableviewPageModule {}
