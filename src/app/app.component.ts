import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  phone = '';
  phonePlaceholder = 'XXX-XXX-XXXX';

  onCountryChange(country: EventTarget | null, form: NgForm) {
    if (country) {
      const phoneControl = form.controls['phone'];
      switch ((country as HTMLInputElement).value.toUpperCase()) {
        case 'USA':
          phoneControl.clearValidators();
          this.phonePlaceholder = 'XXX-XXX-XXXX';
          phoneControl.setValidators([Validators.required, Validators.pattern(new RegExp('^\([0-9]{3}\)-[0-9]{3}-[0-9]{4}$'))]);
          break;
        case 'GERMANY':
          phoneControl.clearValidators();
          this.phonePlaceholder = 'XXX-XXX-X(XXX)';
          phoneControl.setValidators([Validators.required, Validators.pattern(new RegExp('^\([0-9]{3}\)-[0-9]{3}-[0-9]{2,4}$'))]);
          break;
        case 'GB':
          phoneControl.clearValidators();
          this.phonePlaceholder = 'XXX-XXX-XX(XX)';
          phoneControl.setValidators([Validators.required, Validators.pattern(new RegExp('^\([0-9]{3}\)-[0-9]{3}-[0-9]{3,4}$'))]);
          break;
        default:
          void 0;
      }
    }
  }



  onSubmit(form: NgForm) {
    console.log(form.value, form.valid)
  }

}
