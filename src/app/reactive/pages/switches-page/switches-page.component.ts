import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['', Validators.required ],
    wantNotifications: [true],
    termsAndConditions: [false, Validators.requiredTrue],
  })

  constructor( private fb: FormBuilder) {
    // console.log(this.myForm.value);
  }

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  isTermsAccepted(): boolean {
    return this.myForm.controls['termsAndConditions'].touched && this.myForm.controls['termsAndConditions'].invalid;
  }

  isGenderValid(): boolean {
    const genderControl = this.myForm.controls['gender'];
    return genderControl.touched && genderControl.invalid;
  }

  isNotificationsEnabled(): boolean {
    return this.myForm.controls['wantNotifications'].value;
  }

  //ngSubmit
  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return;
    }

    const {termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
  }
}
