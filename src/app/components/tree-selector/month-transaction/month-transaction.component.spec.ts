import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthTransactionComponent } from './month-transaction.component';

describe('MonthTransactionComponent', () => {
  let component: MonthTransactionComponent;
  let fixture: ComponentFixture<MonthTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
