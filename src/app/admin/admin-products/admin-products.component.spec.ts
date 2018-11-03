import { Product } from '../../models/product';
import { AdminProductsComponent } from './admin-products.component';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/Observable';

describe('AdminProductsComponent', () => {
  let component: AdminProductsComponent;
  let service: ProductService;
  const product: Product = {
    $key: '1',
    title: 'titulo',
    price: 1,
    category: 'featured',
    imageUrl: 'https://imageURL.com'
  };

  beforeEach(() => {
    service = new ProductService(null);
    component = new AdminProductsComponent(service);
    component.products = [product];
  });

  

});
