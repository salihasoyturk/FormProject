import { Injectable } from '@angular/core';

export interface IForm {
  name?: string,
  lastname?: string,
  phone?: number,
  id?: number,
  country?: string,
  job?: string
}


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  
  dataArray: IForm[] = [];
}
