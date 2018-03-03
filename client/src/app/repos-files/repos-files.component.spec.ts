import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposFilesComponent } from './repos-files.component';

describe('ReposFilesComponent', () => {
  let component: ReposFilesComponent;
  let fixture: ComponentFixture<ReposFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
