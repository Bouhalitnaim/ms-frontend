import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

    listFormations ;
    listEtudiants;
    currentFormation = {id:-1};

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {

  this.httpClient.get("http://localhost:8081/formations").subscribe(data => {
     this.listFormations=data;
  } ,error => {
    console.log(error);
  })
  }

  onGetEtudiants(f){
    this.currentFormation=f;
    this.httpClient.get("http://localhost:8081/formations/"+f.id+"/etudiants").subscribe(data => {
      this.listEtudiants=data;
    } ,error => {
      console.log(error);
    })

  }
}
