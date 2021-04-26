import { Injectable } from '@angular/core';
import { Post } from './../models/Post';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message?:Post[]

  constructor() { }

  setMessage(data:any) {
    this.message = data;
  }

  getMessage() {
    return this.message;
  }
}
