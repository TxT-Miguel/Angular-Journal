import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

import { Post } from './../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts?:Post[];

  inputTitle:string = "";
  inputAuthor:string = "";
  inputEntry:string = "";

  postMessage = "message from Post";

  message?:string;

  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.posts = []

    // this.message = this.shared.getMessage();
    this.shared.setMessage(this.posts);
  }

  addPost () {
    this.posts?.push({
      content: this.inputTitle,
      author: this.inputAuthor,
      entry: this.inputEntry
    });

    this.inputTitle= "";
    this.inputAuthor= "";
    this.inputEntry= "";
  }
}
