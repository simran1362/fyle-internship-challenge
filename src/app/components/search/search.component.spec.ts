import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the loader when loading is complete', () => {
    component.loading = false;
    fixture.detectChanges();
    const loaderElement: HTMLElement = fixture.nativeElement;

    // Assuming you have some way to hide the loader in your component
    expect(loaderElement).toBeNull();
  });
});
