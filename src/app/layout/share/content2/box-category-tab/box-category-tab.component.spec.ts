import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCategoryTabComponent } from './box-category-tab.component';

describe('BoxCategoryTabComponent', () => {
  let component: BoxCategoryTabComponent;
  let fixture: ComponentFixture<BoxCategoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCategoryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCategoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
