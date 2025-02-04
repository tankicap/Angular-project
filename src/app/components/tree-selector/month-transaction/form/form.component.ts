import { Component, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PeriodicElement } from '../../tree-selector.component';

@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() addElement=new EventEmitter<PeriodicElement>();

  form=new FormGroup({
    name:new FormControl('',{validators:[Validators.required]}),
    weight:new FormControl('',{validators:[Validators.required]}),
    symbol:new FormControl('',{validators:[Validators.required]})
  })

  onSubmit(){
    const enteredName=this.form.value.name ?? '';
    const enteredWeight=this.form.value.weight ?? '';
    const enteredSymbol=this.form.value.symbol ?? '';

    if(this.form.valid){
      const element: PeriodicElement = {
        name: enteredName,
        position: Math.floor(Math.random() * 100) + 1,
        weight: + enteredWeight,
        symbol: enteredSymbol
      };
      this.addElement.emit(element);
      this.form.reset();
    }
  }
}
