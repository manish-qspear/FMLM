import { Component, OnInit } from '@angular/core';
declare function myapptest();
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    myapptest();
    $(document).ready(() => {
      $('.collapsible').collapsible();
    });
   
  }

  ngAfterViewInit() {
    $('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
      showCloseButton: true, // Append close button into siednav
      closeOnClick: true,
    });
  }

}
