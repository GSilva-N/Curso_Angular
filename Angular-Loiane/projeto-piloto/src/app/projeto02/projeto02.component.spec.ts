import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto02Component } from './projeto02.component';

describe('Projeto02Component', () => {
  let component: Projeto02Component;
  let fixture: ComponentFixture<Projeto02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projeto02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projeto02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
