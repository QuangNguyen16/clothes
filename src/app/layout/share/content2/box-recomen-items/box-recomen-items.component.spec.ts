import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxRecomenItemsComponent } from './box-recomen-items.component';

describe('BoxRecomenItemsComponent', () => {
  let component: BoxRecomenItemsComponent;
  let fixture: ComponentFixture<BoxRecomenItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxRecomenItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxRecomenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
