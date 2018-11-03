import { ProductsComponent } from "./products.component";
import { ProductService } from "./../services/product.service";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let service: ProductService;

  beforeEach(() => {
    service = new ProductService(null);
  });

  it("ProductsComponent deberia crearse", () => {
    expect(service).toBeTruthy();
  });
  
});