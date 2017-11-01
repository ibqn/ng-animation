import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeBlockComponent } from './fade-block.component';

describe('FadeBlockComponent', () => {
  let component: FadeBlockComponent;
  let fixture: ComponentFixture<FadeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
