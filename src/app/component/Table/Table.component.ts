import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-Table',
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css']
})
export class TableComponent {
  @Input() students:{name:string,age:Number}[] = [];
}
