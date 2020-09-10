import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cn-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  @Output() save = new EventEmitter();
  myReactiveForm = new FormGroup({
    test1: new FormControl(null, [Validators.required, this.myCustomValidator]),
    test2: new FormControl({
      value: null,
      disabled: true
    }, [Validators.maxLength(10)])
  });

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm.controls.test1.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.myReactiveForm.controls.test2.enable();
      } else {
        this.myReactiveForm.controls.test2.disable();
      }
    });
  }

  handleSubmit(form) {
    console.log(form);
  }

  handleReactiveSubmit() {
    if (this.myReactiveForm.valid) {
      this.save.emit(this.myReactiveForm.value);
    }
  }

  myCustomValidator(control: AbstractControl) {
    return control.value && control.value.includes('0') ? { hasZero: true } : null;
  }

}
