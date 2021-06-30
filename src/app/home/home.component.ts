import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  memes = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply1(newMessage: string){
    this.memes.push(newMessage);
  }
  
  memes2 = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply2(newMessage: string){
    this.memes2.push(newMessage);
  }

  memes3 = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply3(newMessage: string){
    this.memes3.push(newMessage);
  }
  
  memes4 = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply4(newMessage: string){
    this.memes4.push(newMessage);
  }

  memes5 = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply5(newMessage: string){
    this.memes5.push(newMessage);
  }
  
  memes6 = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply6(newMessage: string){
    this.memes2.push(newMessage);
  }

  memes7 = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply7(newMessage: string){
    this.memes7.push(newMessage);
  }

  memes8 = ["too amazing not to be funny","lol","hahaha..... love it"];
  public postMemeReply8(newMessage: string){
    this.memes8.push(newMessage);
  }





}
