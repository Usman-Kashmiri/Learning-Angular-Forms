import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  userData:any = {}
  show=true;

  formData(data:NgForm) {
    this.userData=data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
