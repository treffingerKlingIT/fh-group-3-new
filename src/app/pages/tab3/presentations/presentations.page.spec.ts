import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationsPage } from './presentations.page';

describe('PresentationsPage', () => {
  let component: PresentationsPage;
  let fixture: ComponentFixture<PresentationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresentationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
