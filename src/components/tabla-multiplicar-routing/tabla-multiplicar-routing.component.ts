import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-routing',
  templateUrl: './tabla-multiplicar-routing.component.html',
  styleUrl: './tabla-multiplicar-routing.component.css'
})
export class TablaMultiplicarRoutingComponent {

  public numero!:number;
  public tabla: Array<{operacion: string, resultado:number}> 

  constructor(private _activeRoute: ActivatedRoute){

    this.tabla = [
      {
        operacion: "",
        resultado: 0
      }
    ]

  }

  mostrarTabla():void{

    this.tabla=[]

    for(let i = 1; i<=10; i++){
      let result = i*this.numero
      this.tabla.push({
        operacion: i+" x "+this.numero,
        resultado: result
      })

    }

  }

  ngOnInit():void{

    this._activeRoute.params.subscribe((parametros:Params)=>{
      if(parametros['numero']!=null){
        this.numero = parseInt(parametros["numero"])
      }
    })

  }
  

}
