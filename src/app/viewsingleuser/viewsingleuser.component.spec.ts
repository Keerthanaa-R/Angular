import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsingleuserComponent } from './viewsingleuser.component';

describe('ViewsingleuserComponent', () => {
  let component: ViewsingleuserComponent;
  let fixture: ComponentFixture<ViewsingleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsingleuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsingleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
