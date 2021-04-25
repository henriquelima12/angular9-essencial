import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name : '',
    price : null
  }


  constructor(private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto inserido com sucesso")
      this.router.navigate(['products'])
    });
    
  }

  cancel(): void {
    this.router.navigate(['products'])
  }

}
