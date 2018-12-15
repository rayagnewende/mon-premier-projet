import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  

  @Input() appareilName ;
  @Input() appareilStatus;
  constructor() { }

  ngOnInit() {
  }

  getAppareilStatus()
  {
    return this.appareilStatus ;
  }

  getColor()
  {
    if(this.appareilStatus === 'allumé')
    {
      return 'green';
    }
    else if(this.appareilStatus === 'eteint')
    {
      return 'red';
    }
  }

}
