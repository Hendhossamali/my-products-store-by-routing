import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  
  mainThemeColor:string = "Green"
   
  isLoggedIn:boolean = true;

  classPageTitle: string = "text-center";

  stylePageTitle = {
    'color' : 'red',
    'margin' : '20px',
  }
  products = [
    {
      id: 1,
      title: "Jasmine Bag",
      price: 100 ,
      color: "Red",
      discount: 10 ,
      photo: "../../assets/products-img/jasminebag.jpg" , 
    },
    {
      id: 2,
      title: "Oreo Bag",
      price: 200 ,
      color: "Green",
      discount: 15 ,
      photo: "../../assets/products-img/Oreo.jpg" , 
    },
    {
      id: 3,
      title: "Wallet",
      color: "Blue",
      price: 100 ,
      discount: 10 ,
      photo: "../../assets/products-img/wallet.jpg" , 
    },
    {
      id: 4,
      title: "Buff",
      color: "winter color",
      price: 100 ,
      discount: 10 ,
      photo: "../../assets/products-img/buffwinter.jpg" , 
    },
    {
      id: 5,
      title: "Buff",
      color: "summer color",
      price: 200 ,
      discount: 15 ,
      photo: "../../assets/products-img/buffsummer.jpg" , 
    },
    {
      id: 6,
      title: "Buff",
      price: 100 ,
      color: "spring color",
      discount: 10 ,
      photo: "../../assets/products-img/buffspring.jpg" , 
    },
    {
      id: 7,
      title: "Buff",
      color: "gray",
      price: 100 ,
      discount: 10 ,
      photo: "../../assets/products-img/buffgray.jpg" , 
    },
    {
      id: 8,
      title: "Slipper",
      color: "Red",
      price: 100 ,
      discount: 10 ,
      photo: "../../assets/products-img/slipper.jpg" , 
    },
  ]
}
