import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    // window.addEventListener('scroll', this.checkIfElementInView, true);
  }
// checkIfElementInView(){
//   let el = document.getElementById('about')!;
//   var top = el.offsetTop;
//   var left = el.offsetLeft;
//   var width = el.offsetWidth;
//   var height = el.offsetHeight;

//   while(el.offsetParent) {
//     el = el.offsetParent;
//     top += el.offsetTop;
//     left += el.offsetLeft;
//   }

//   return (
//     top < (window.pageYOffset + window.innerHeight) &&
//     left < (window.pageXOffset + window.innerWidth) &&
//     (top + height) > window.pageYOffset &&
//     (left + width) > window.pageXOffset
//   );
// }
}
