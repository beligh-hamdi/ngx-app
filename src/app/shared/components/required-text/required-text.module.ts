import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequiredTextComponent} from './required-text.component';
import {FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RequiredTextComponent),
  multi: true
};

export const CUSTOM_INPUT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredTextComponent),
  multi: true
};


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [RequiredTextComponent],
  exports: [RequiredTextComponent],
  providers: [ CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CUSTOM_INPUT_CONTROL_VALIDATORS]
})
export class RequiredTextModule { }
