import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubPagePage } from './club-page.page';

describe('ClubPagePage', () => {
  let component: ClubPagePage;
  let fixture: ComponentFixture<ClubPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClubPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
