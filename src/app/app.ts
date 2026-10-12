import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { PortfolioComponent } from './components/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
}
