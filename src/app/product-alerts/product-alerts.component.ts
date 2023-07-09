import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  data: string = '';
  @Input() product: Product | undefined;
  @Output() infoEmitter = new EventEmitter();
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  emitData() {
    this.data = 'Mesajul a fost emis ! ';
    this.infoEmitter.emit(this.data);
  }
}
