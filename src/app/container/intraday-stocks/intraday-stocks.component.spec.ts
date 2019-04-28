import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntradayStocksComponent } from './intraday-stocks.component';

describe('IntradayStocksComponent', () => {
  let component: IntradayStocksComponent;
  let fixture: ComponentFixture<IntradayStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntradayStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntradayStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
