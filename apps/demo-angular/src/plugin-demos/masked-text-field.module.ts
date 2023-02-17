import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MaskedTextFieldModule as module} from '@nativescript/masked-text-field/angular';
import { MaskedTextFieldComponent } from './masked-text-field.component';

@NgModule({
	imports: [NativeScriptCommonModule,module, NativeScriptRouterModule.forChild([{ path: '', component: MaskedTextFieldComponent }])],
  declarations: [MaskedTextFieldComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MaskedTextFieldModule {}
