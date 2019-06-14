import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = "";
  ContactNumber = ""; 
  title = 'practice-work';

  onsubmitButton(value : any)
  {
  this.name = value.name;
  this.ContactNumber = value.number;
  }

}
