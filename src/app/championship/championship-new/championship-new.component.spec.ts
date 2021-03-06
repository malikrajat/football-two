import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipNewComponent } from './championship-new.component';

describe('ChampionshipNewComponent', () => {
  let component: ChampionshipNewComponent;
  let fixture: ComponentFixture<ChampionshipNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
