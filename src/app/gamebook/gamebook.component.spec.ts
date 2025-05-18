import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamebookComponent } from './gamebook.component';

describe('GamebookComponent', () => {
  let component: GamebookComponent;
  let fixture: ComponentFixture<GamebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
