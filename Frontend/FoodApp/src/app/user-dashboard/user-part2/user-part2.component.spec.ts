import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPart2Component } from './user-part2.component';

describe('UserPart2Component', () => {
  let component: UserPart2Component;
  let fixture: ComponentFixture<UserPart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPart2Component]
    });
    fixture = TestBed.createComponent(UserPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
