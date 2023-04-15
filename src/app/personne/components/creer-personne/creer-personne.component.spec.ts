import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPersonneComponent } from './creer-personne.component';

describe('CreerPersonneComponent', () => {
  let component: CreerPersonneComponent;
  let fixture: ComponentFixture<CreerPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerPersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
