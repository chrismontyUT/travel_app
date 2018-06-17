import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMapsViewComponent } from './my-maps-view.component';

describe('MyMapsViewComponent', () => {
  let component: MyMapsViewComponent;
  let fixture: ComponentFixture<MyMapsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMapsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMapsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
