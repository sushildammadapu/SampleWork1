import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCmpComponent } from './search-cmp.component';

describe('SearchCmpComponent', () => {
  let component: SearchCmpComponent;
  let fixture: ComponentFixture<SearchCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
