import { Component } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private service:OrderDetailsService){}
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
  
}
