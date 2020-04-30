import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyViewComponent } from './photography-view.component';

describe('PhotographyViewComponent', () => {
  let component: PhotographyViewComponent;
  let fixture: ComponentFixture<PhotographyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
