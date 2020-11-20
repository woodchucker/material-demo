import { Component, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-demo';
  ckValue = '';
  isChecked = true;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  food = 'pizza-1';
  onCheckBoxChange($e: MatCheckboxChange): void {
    console.log(($e));
  }
  onInputChange($e: any,errors:any):void{
    console.log(errors);
  }
}
