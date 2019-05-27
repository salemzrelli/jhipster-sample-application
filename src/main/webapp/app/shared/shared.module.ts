import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FirstSampleApplicationSharedLibsModule,
  FirstSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [FirstSampleApplicationSharedLibsModule, FirstSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FirstSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: FirstSampleApplicationSharedModule
    };
  }
}
