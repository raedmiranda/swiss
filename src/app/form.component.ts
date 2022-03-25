import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TableComponent } from './table.component';

export class Registro {
  name: string = '';
  lastname: string = '';
  id: number = 0;
  phone: string = '';
  email: string = '';
  accept: boolean = false;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  arrData: Registro[] = [];

  @Output()
  objectdata: EventEmitter<Registro> = new EventEmitter<Registro>(undefined);

  constructor(private builder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      id: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      accept: new FormControl(),
    });
  }

  public confirm() {
    const model = this.obtainData();
    this.arrData.push(model);
    console.log(this.arrData);
    this.objectdata.emit(model);
  }

  obtainData(): Registro {
    let data = new Registro();
    data.name = this.form.controls.name.value || '';
    data.lastname = this.form.controls.lastname.value || '';
    data.id = this.form.controls.id.value;
    data.phone = this.form.controls.phone.value;
    data.email = this.form.controls.email.value;
    data.accept = this.form.controls.accept.value;
    return data;
  }

  clear() {}
}
