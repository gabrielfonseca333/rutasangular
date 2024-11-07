import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css'
})
export class NumerodobleComponent implements OnInit{

  //ESTA VARIABLE NO TIENE QUE VER CON EL PARAM
  public numero!: number;
  public doble!: number;

  constructor(private _activeRoute: ActivatedRoute, 
    private _router: Router
  ){}

  redirect(num:number):void{
    //NOS VAMOS A LLAMAR A NOSOTROS MISMOS ENVINADO
    //EN LA RUTA EL PARAMETRO DEL NUMERO RECIBIDO
    this._router.navigate(["/numerodoble", num])
  }

  goToHome():void{
    this._router.navigate(["/"])
  }

  ngOnInit(): void {
      this._activeRoute.params.subscribe((parametros: Params)=> {
        //DENTRO DE LA VARIBALE parametros DE TIPO Params
        //SE RECUPERA EL PARAMETRO POR SU NOMBRE CON LA SIGUIENTE SINTAXIS
        if(parametros['numero']!=null){
          //los parametros son string
          this.numero = parseInt(parametros["numero"])
          this.doble = this.numero * 2
        }
      })
  }

}
