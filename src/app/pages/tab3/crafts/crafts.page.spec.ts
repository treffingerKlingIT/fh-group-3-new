import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CraftsPage } from './crafts.page';

describe('CraftsPage', () => {
  let component: CraftsPage;
  let fixture: ComponentFixture<CraftsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CraftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
