import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestimonyComponent } from './user-testimony.component';

describe('UserTestimonyComponent', () => {
  let component: UserTestimonyComponent;
  let fixture: ComponentFixture<UserTestimonyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTestimonyComponent]
    });
    fixture = TestBed.createComponent(UserTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
