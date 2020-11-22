import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IForm, SharedService } from '../shared.service';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data: any;
  modalOpenState = false;
  


  @Output() userInfo: EventEmitter<any> = new EventEmitter<any>();
 

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    
    this.data = this.sharedService.dataArray;
    console.log(this.sharedService.dataArray);

    
  }

  deleteRow(item: any): void {
    // var delBtn = confirm(" Do you want to delete this row?");
    // if ( delBtn == true ) {

    this.data.splice(item, 1);

  }
  openModal(item: any): void {
    this.userInfo.emit(item);

  }
  


}
