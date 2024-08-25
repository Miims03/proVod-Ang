import { Component } from '@angular/core';
import { AllVodComponent } from '../../components/all-vod/all-vod.component';
import { HeroComponent } from '../../layouts/hero/hero.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AllVodComponent , HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
