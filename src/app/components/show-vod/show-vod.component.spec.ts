import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVodComponent } from './show-vod.component';

describe('ShowVodComponent', () => {
  let component: ShowVodComponent;
  let fixture: ComponentFixture<ShowVodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowVodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
