import {Component, ElementRef, OnInit, Self, ViewChild} from '@angular/core';
import {
  AbstractControl, ControlValueAccessor, NgControl, ValidationErrors, Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-required-text',
  templateUrl: './required-text.component.html',
  styleUrls: ['./required-text.component.css'],
})
export class RequiredTextComponent implements ControlValueAccessor, Validator, OnInit {
  disabled: boolean;
  @ViewChild('input') input: ElementRef;

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  writeValue(value: any) {
    this.input.nativeElement.value = value;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators = control.validator ? [control.validator, Validators.required] : Validators.required;
    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange(event) {

  }

  onTouched() {}

  registerOnChange(fn: (value: any) => void) {
     this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(c: AbstractControl): ValidationErrors | any {
    return Validators.required(c);
  }
}
