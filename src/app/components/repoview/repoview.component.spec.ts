import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoviewComponent } from './repoview.component';

describe('RepoviewComponent', () => {
  let component: RepoviewComponent;
  let fixture: ComponentFixture<RepoviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoviewComponent]
    });
    fixture = TestBed.createComponent(RepoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
