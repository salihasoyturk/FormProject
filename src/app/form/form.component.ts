import { ReadKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm!: FormGroup;
  disableSelect = new FormControl(false);
 

  constructor(private fb: FormBuilder, public sharedService: SharedService) { }



  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl(''),
      phone: new FormControl(''),
      id: new FormControl({ value: Math.floor((Math.random() * 100)), disabled: true }),
      country: new FormControl(''),
      job: new FormControl('')
    });
  }

  onSubmit(): void {

    const newElement = this.myForm.getRawValue();
    const ayniElement = this.sharedService.dataArray.find(obj => obj.id === newElement.id)

    if (!ayniElement) {
      this.sharedService.dataArray.push(this.myForm.getRawValue())
    }
   
    
    console.log(this.sharedService.dataArray);
    this.myForm.reset();
    this.myForm.controls.id.setValue(Math.floor(Math.random() * 100));
    this.myForm.controls.country.setValue('');
    this.myForm.controls.job.setValue('');
    

  }
}
