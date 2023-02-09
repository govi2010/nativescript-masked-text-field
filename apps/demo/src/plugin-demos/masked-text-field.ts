import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMaskedTextField } from '@demo/shared';



let viewModel: Observable;
export function navigatingTo(args: EventData) {
  console.log("navigatingTo")
  const page = args.object as Page;

  viewModel = new Observable();
  viewModel.set("placeholder", "_");
  viewModel.set("mask", "(999) 999-9999");
  viewModel.set("value", null);
  page.bindingContext = viewModel;
}

export function changePlaceholder() {
  console.log("changePlaceholder")
  viewModel.set("placeholder", "x");
}

export function changeMask() {
  viewModel.set("mask", "999.999.9999");
}


export class DemoModel extends DemoSharedMaskedTextField {

}
