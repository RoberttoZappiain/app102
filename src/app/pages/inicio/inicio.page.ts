import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //arreglo de components
  componentes: Componente[] = [
    {
      icon: 'baseball-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alarm-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'alarm-outline',
      name: 'Cards',
      redirectTo: '/cards'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}

interface Componente{
  icon:string;
  name:string;
  redirectTo: string;
}
