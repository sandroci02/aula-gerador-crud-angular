import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor() { }

  sucesso(mensagem: String) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '' + mensagem,
      showConfirmButton: false,
      timer: 3000
    })
  }

  erro(mensagem: String) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: '' + mensagem,
      showConfirmButton: false,
      timer: 3000
    })
  }

  info(mensagem: String) {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: '' + mensagem,
      showConfirmButton: false,
      timer: 30
    })
  }
}
