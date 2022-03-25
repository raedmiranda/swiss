import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Registro } from './form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
  set data(items: Registro[]) {
    debugger;
    this.lista = items;
  }

  lista: Registro[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('this.data', this.data);

    // this.lista = [
    //   {
    //     name: 'hh',
    //     lastname: 'hhhjhj',
    //     id: 1,
    //     phone: '8751564',
    //     email: 'ghjgt',
    //     accept: true,
    //   },
    // ];

    // this.data = this.lista;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this.data chnge', this.data);
  }

  edit(row: Registro) {}

  delete(row: Registro) {}
}
