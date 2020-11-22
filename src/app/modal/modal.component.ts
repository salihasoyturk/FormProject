import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IForm, SharedService } from '../shared.service';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent implements OnInit {

  myForm!: FormGroup;
  disableSelect = new FormControl(false);


  @Input() updateUser: IForm = {};
  @Output() modalCloseOutput: EventEmitter<any> = new EventEmitter<any>()
  @Output() modalUpdateOutput: EventEmitter<any> = new EventEmitter<any>();

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(this.updateUser.name),
      lastname: new FormControl(this.updateUser.lastname),
      phone: new FormControl(this.updateUser.phone),
      id: new FormControl({ value: this.updateUser.id, disabled: true }),
      country: new FormControl(this.updateUser.country),
      job: new FormControl(this.updateUser.job)
    });
  }


  modalClose() {

    console.log("form kapandı");
    this.modalCloseOutput.emit();

  }

  modalUpdate() {
    console.log("form güncellendi");
    const allData = this.sharedService.dataArray;
    const newData: IForm = this.myForm.getRawValue();
    const selectedData = allData.find(element => element.id === newData.id);
    let selectedData2;
    for (const element of allData) {
      if (element.id === newData.id) {
        selectedData2 = element;
        break;
      }
    }
    if (selectedData) {
      selectedData.name = newData.name;
      selectedData.lastname = newData.lastname;
      selectedData.job = newData.job;
      selectedData.country = newData.country;
      selectedData.phone = newData.phone;
    }
    // this.sharedService.dataArray
    this.modalCloseOutput.emit();
  }



}
