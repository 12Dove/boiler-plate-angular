import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablespageComponent } from './tablespage.component';

describe('TablespageComponent', () => {
  let component: TablespageComponent;
  let fixture: ComponentFixture<TablespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
