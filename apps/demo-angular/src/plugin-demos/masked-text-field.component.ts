import { Component, NgZone } from '@angular/core';
import { DemoSharedMaskedTextField } from '@demo/shared';
import '@nativescript/masked-text-field';

@Component({
	selector: 'demo-masked-text-field',
	templateUrl: 'masked-text-field.component.html',
})
export class MaskedTextFieldComponent {
  mask = '(999) 999-9999';
  value = null;
  placeholder = '_';

  demoShared: DemoSharedMaskedTextField;

	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMaskedTextField();
  }

}
