import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuestionCardComponent } from './search-question-card.component';

describe('SearchQuestionCardComponent', () => {
  let component: SearchQuestionCardComponent;
  let fixture: ComponentFixture<SearchQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
