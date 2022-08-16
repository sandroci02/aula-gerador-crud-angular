import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ParametroData } from 'src/app/model/parametroData.model';
import { MensagemService } from 'src/app/service/mensagem.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {


  constructor(private router: Router, private api: ApiService, private mensagem: MensagemService) { }

  ngOnInit() {
  }

    
  verifica(){   
  }


  logout() {
  }

  goDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  goTrocaSenha() {
    this.router.navigate(["/troca-senha"]);
  }
}
