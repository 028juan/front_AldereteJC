import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-editpersona',
  templateUrl: './editpersona.component.html',
  styleUrls: ['./editpersona.component.css']
})
export class EditpersonaComponent implements OnInit {
  Persona:persona = new persona("","","","","","","");

  constructor(private personaS:PersonaService, private activateRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id= this.activateRouter.snapshot.params['id'];

    this.personaS.getPersona().subscribe( data =>{
        this.Persona= data;
        console.log(data)
      },err =>{
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar la persona!',

        })
        this.router.navigate([''])

      }

    )
  }
  onUpdate():void{
    
    const id= this.activateRouter.snapshot.params['id'];
    console.log(id)
    console.log(this.personaS.editPersona(id, this.Persona))
  
    this.personaS.editPersona(id, this.Persona).subscribe(
      data=>{
        Swal.fire({   

          position: 'center',
          icon: 'success',
          title: 'Persona Actualizada',
          showConfirmButton: false,
          timer: 1500,
          

        })
        this.router.navigate([''])
      },err=>{
        Swal.fire({
          icon: 'error',

          text: 'Error al actualizar los datos de la persona!',

        })
        this.router.navigate([''])

      }
    )

  }
  
 cancelar() :void{
  this.router.navigate(['']);

}




}
