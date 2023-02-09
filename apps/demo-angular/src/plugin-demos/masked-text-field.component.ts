import { Component, NgZone } from '@angular/core';
import { DemoSharedMaskedTextField } from '@demo/shared';
import { } from '@nativescript/masked-text-field';

@Component({
	selector: 'demo-masked-text-field',
	templateUrl: 'masked-text-field.component.html',
})
export class MaskedTextFieldComponent {
  
  demoShared: DemoSharedMaskedTextField;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMaskedTextField();
  }

}