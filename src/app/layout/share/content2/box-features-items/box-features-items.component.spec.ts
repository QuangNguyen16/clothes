import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFeaturesItemsComponent } from './box-features-items.component';

describe('BoxFeaturesItemsComponent', () => {
  let component: BoxFeaturesItemsComponent;
  let fixture: ComponentFixture<BoxFeaturesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxFeaturesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFeaturesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
