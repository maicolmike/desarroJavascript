import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonMod
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Agrega CommonModule aquí
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks2 = signal([
    'instalar',
    'proyecto',
    'componente',
    'correr'
  ])

}
