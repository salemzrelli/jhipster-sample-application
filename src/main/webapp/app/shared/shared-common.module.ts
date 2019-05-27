import { NgModule } from '@angular/core';

import { FirstSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [FirstSampleApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [FirstSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FirstSampleApplicationSharedCommonModule {}
