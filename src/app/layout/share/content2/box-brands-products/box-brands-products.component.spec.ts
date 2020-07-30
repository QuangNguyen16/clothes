import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBrandsProductsComponent } from './box-brands-products.component';

describe('BoxBrandsProductsComponent', () => {
  let component: BoxBrandsProductsComponent;
  let fixture: ComponentFixture<BoxBrandsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBrandsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBrandsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
