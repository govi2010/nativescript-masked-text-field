/*! *****************************************************************************
Copyright (c) 2020 Tangra Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */
import { Directive, forwardRef, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { TextValueAccessor } from "@nativescript/angular";

import { MaskedTextField } from "../";

const MASKED_TEXT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskedTextValueAccessor),
    multi: true,
};

@Directive({
    selector:
        "MaskedTextField[ngModel], MaskedTextField[formControlName], MaskedTextField[formControl]" +
        "maskedTextField[ngModel], maskedTextField[formControlName], maskedTextField[formControl]" +
        "masked-text-field[ngModel], masked-text-field[formControlName], masked-text-field[formControl]",
    providers: [MASKED_TEXT_VALUE_ACCESSOR],
    host: {
        "(blur)": "onTouched()",
        "(textChange)": "onTextChange($event.value)",
    }
})
export class MaskedTextValueAccessor extends TextValueAccessor {
    @Input() public includeMaskInValue: boolean = true;

    // Empty as we will use the same logic as the TextValueAccessor
    public onTextChange(value: string) {
        this.onChange(this.includeMaskInValue ? value : (this.view as MaskedTextField).value);
    }
}