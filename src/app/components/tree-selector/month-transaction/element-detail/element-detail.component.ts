import { Component, Input } from '@angular/core';
import { PeriodicElement } from '../../tree-selector.component';

@Component({
  selector: 'app-element-detail',
  imports: [],
  templateUrl: './element-detail.component.html',
  styleUrl: './element-detail.component.scss'
})
export class ElementDetailComponent {

  @Input() element?:PeriodicElement;


}
