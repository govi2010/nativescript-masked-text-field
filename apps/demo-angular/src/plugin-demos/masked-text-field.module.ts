import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MaskedTextFieldComponent } from './masked-text-field.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MaskedTextFieldComponent }])],
  declarations: [MaskedTextFieldComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MaskedTextFieldModule {}
