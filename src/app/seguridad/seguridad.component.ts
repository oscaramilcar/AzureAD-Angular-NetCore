import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL_API = "https://localhost:5001/api/saludo";

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent {

  titulo = 'Angular auth con Azure AD';
  mostrarRespuesta:boolean = false;
  respuestaTxt:string = '';
  respuestaExitosa :boolean = false;

  constructor(
    private authService:MsalService,
    private http:HttpClient
  ) {    
    
  }  

  mostarMensaje(){
    this.authService.loginPopup().then(result =>{
      this.authService.acquireTokenSilent({
        scopes:["api://<colocar scope_name>"]
      }).then((result:any) =>{
        this.http.get(URL_API,{
          responseType:'text',
          headers:new HttpHeaders({
            'Authorization':'Bearer '+ result.accessToken
          })
        }).subscribe((result) =>{
          this.respuestaTxt = result;
          this.mostrarRespuesta = true;
          this.respuestaExitosa = true;
        }, error => {
          this.respuestaTxt = "ERROR: Algo salio muy mal !!!";
          this.mostrarRespuesta = false;
          this.respuestaExitosa = false;
        })
      })
    }).catch(err => {
      console.log("Error", err)
    })
  }

}
