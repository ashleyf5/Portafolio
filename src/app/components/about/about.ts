import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly name = 'Ashly';
  protected readonly profession = 'Desarrolladora web';
  protected readonly description =
    'Me interesa convertir ideas en sitios web útiles, intuitivos y adaptables. Disfruto creando interfaces accesibles y cuidando cada detalle de la experiencia digital.';
  protected readonly focusAreas = [
    'Desarrollo de interfaces web',
    'Diseño adaptable y accesible',
    'Aplicaciones con Angular',
  ];
}
