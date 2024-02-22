import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {

  public name = 'World';
  public nameTwo = 'Franko';
  public helloArray = ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.'];

  getName () {
    return this.nameTwo;
  }

}
