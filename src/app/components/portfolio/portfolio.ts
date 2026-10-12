import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-portfolio',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  protected readonly projects: PortfolioProject[] = [
    {
      title: 'AlfaWeb',
      category: 'Desarrollo web',
      description: 'Diseño y desarrollo de una experiencia web.',
      image: 'assets/img/portfolio/alfaweb.jpg',
      width: 745,
      height: 667,
    },
    {
      title: 'Predicción',
      category: 'Aplicación',
      description: 'Interfaz para visualizar resultados de predicción.',
      image: 'assets/img/portfolio/prediccion.jpg',
      width: 917,
      height: 591,
    },
    {
      title: 'Aplicación móvil',
      category: 'Aplicación',
      description: 'Concepto de interfaz para una aplicación.',
      image: 'assets/img/portfolio/app-1.jpg',
      width: 1024,
      height: 768,
    },
    {
      title: 'Aplicación creativa',
      category: 'Aplicación',
      description: 'Diseño visual de una experiencia digital.',
      image: 'assets/img/portfolio/app-2.jpg',
      width: 1024,
      height: 768,
    },
    {
      title: 'Aplicación de producto',
      category: 'Aplicación',
      description: 'Propuesta de interfaz centrada en el producto.',
      image: 'assets/img/portfolio/app-3.jpg',
      width: 1024,
      height: 768,
    },
    {
      title: 'Identidad de marca',
      category: 'Branding',
      description: 'Exploración visual para una identidad de marca.',
      image: 'assets/img/portfolio/branding-1-1.jpg',
      width: 1024,
      height: 768,
    },
    {
      title: 'Diseño editorial',
      category: 'Editorial',
      description: 'Composición editorial y presentación de contenido.',
      image: 'assets/img/portfolio/books-1-1.jpg',
      width: 1024,
      height: 768,
    },
    {
      title: 'Diseño de producto',
      category: 'Producto',
      description: 'Presentación visual de una idea de producto.',
      image: 'assets/img/portfolio/product-1.jpg',
      width: 1024,
      height: 768,
    },
  ];
}
