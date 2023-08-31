import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponent } from './tech.component';

describe('TechComponent', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechComponent]
    });
    fixture = TestBed.createComponent(TechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
