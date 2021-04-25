import { Component, OnInit } from '@angular/core';
import { Post } from './../models/Post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts?:Post[];

  inputTitle:string = "";
  inputAuthor:string = "";
  inputEntry:string ="";

  constructor() { }

  ngOnInit(): void {
    this.posts = [

    ]
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
