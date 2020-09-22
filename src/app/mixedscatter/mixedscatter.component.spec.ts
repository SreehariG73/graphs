import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedscatterComponent } from './mixedscatter.component';

describe('MixedscatterComponent', () => {
  let component: MixedscatterComponent;
  let fixture: ComponentFixture<MixedscatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedscatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedscatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
