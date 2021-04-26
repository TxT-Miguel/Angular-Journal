import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Post } from './../models/Post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  message?:Post[];

  constructor(private shared:SharedService) { }

  // message = "Hello! I am view component!!! "

  ngOnInit(): void {
    // this.shared.setMessage(this.message);
    this.message = this.shared.getMessage();
  }

}
