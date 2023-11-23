import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardDetailComponent } from './scorecard-detail.component';

describe('ScorecardDetailComponent', () => {
  let component: ScorecardDetailComponent;
  let fixture: ComponentFixture<ScorecardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorecardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorecardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
