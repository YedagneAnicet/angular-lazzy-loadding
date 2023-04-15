import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirPersonneComponent } from './voir-personne.component';

describe('VoirPersonneComponent', () => {
  let component: VoirPersonneComponent;
  let fixture: ComponentFixture<VoirPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirPersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
