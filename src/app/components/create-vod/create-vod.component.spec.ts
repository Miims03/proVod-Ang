import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVodComponent } from './create-vod.component';

describe('CreateVodComponent', () => {
  let component: CreateVodComponent;
  let fixture: ComponentFixture<CreateVodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
