import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly name = 'Ashly';
  protected readonly headline = 'Desarrolladora web';
  protected readonly introduction =
    'Creo experiencias digitales claras, accesibles y pensadas para las personas.';
}
