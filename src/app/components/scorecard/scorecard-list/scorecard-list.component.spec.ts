import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardListComponent } from './scorecard-list.component';

describe('ScorecardListComponent', () => {
  let component: ScorecardListComponent;
  let fixture: ComponentFixture<ScorecardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorecardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorecardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
