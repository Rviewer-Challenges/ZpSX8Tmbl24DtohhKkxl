import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTweetComponent } from './simple-tweet.component';

describe('SimpleTweetComponent', () => {
  let component: SimpleTweetComponent;
  let fixture: ComponentFixture<SimpleTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
