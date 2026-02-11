import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customcheckbox } from './customcheckbox';

describe('Customcheckbox', () => {
  let component: Customcheckbox;
  let fixture: ComponentFixture<Customcheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customcheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customcheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
