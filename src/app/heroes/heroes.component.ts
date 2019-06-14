import { Component, OnInit } from '@angular/core';
import { Heroes } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    hide = true;

    HEROES: Heroes[] = [
    { id: 1 , name: 'Rakesh', lastName: 'Patil' },
    { id: 2 , name: 'Sagar'  ,lastName: 'Viday' },
    { id: 3 , name: 'Sachin', lastName: 'Verma' },
    { id: 4 , name: 'Harish', lastName: 'Patil' },
    { id: 5 , name: 'Abhi', lastName: 'Kulkarni' },
    { id: 6 , name: 'Shubham' ,lastName: 'Deshmukh' },
    { id: 7 , name: 'Shirish' ,lastName: 'Patil' },
    { id: 8 , name: 'Apoorva' ,lastName: 'Kulkarni' }
];

  constructor() { }

  ngOnInit() {

  }

  getData()
  {
    this.hide == true ?  this.hide = false :  this.hide =true ;
  }
  


}
