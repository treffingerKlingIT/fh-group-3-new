import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KaraokePage } from './karaoke.page';

describe('KaraokePage', () => {
  let component: KaraokePage;
  let fixture: ComponentFixture<KaraokePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KaraokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
