import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonMod
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Agrega CommonModule aquí
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'home todoapp';
  welcome = 'hola mundo p';
  tasks = [
    'instalar',
    'proyecto',
    'componente'
  ]
  name = 'Maicol yela';
  age = 18;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';
  name2 = signal('Maicol yela');
  name3 = signal('Maicol yela 11');

  tasks2 = signal([
    'instalar',
    'proyecto',
    'componente'
  ])


person = {
  name:'Maicol',
  age: 18,
  avatar: 'https://w3schools.com/howto/img_avatar.png'
}


clickHandler(){
  alert('hola')
}

changeHandler(event: Event){
  console.log(event);
}

keydownHandler(event: KeyboardEvent){
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}

changeHandler2(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  this.name2.set(newValue);
}

keydownHandler2(event: KeyboardEvent){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  this.name3.set(newValue);
}

}
