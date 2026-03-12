import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandoAiComponentComponent } from './mando-ai-component.component';

describe('MandoAiComponentComponent', () => {
  let component: MandoAiComponentComponent;
  let fixture: ComponentFixture<MandoAiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandoAiComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandoAiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
