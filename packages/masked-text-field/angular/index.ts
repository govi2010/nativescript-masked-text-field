import { NgModule } from '@angular/core';

import { isKnownView, registerElement } from '@nativescript/angular';

import { MaskedTextValueAccessor } from './masked-text-field.directive';
import { MaskedTextField } from '@nativescript/masked-text-field';

@NgModule({
  declarations: [
    MaskedTextValueAccessor
  ],
  providers: [],
  imports: [],
  exports: [
    MaskedTextValueAccessor
  ]
})
export class MaskedTextFieldModule {
}

export { MaskedTextValueAccessor } from './masked-text-field.directive';

if (!isKnownView('MaskedTextField')) {
  registerElement('MaskedTextField', () => MaskedTextField);
}
