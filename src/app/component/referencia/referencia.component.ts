import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Paginador } from '../../model/paginador.model';
import { ParametroData } from '../../model/parametroData.model';
import { AguardeService } from '../../service/aguarde.service';
import { ApiService } from '../../service/api.service';
import { MensagemService } from '../../service/mensagem.service';
import { ReferenciaModalComponent } from '../referencia-modal/referencia-modal.component';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent implements OnInit {

  displayedColumns: string[] = ['descricao', 'acao'];
  dataSource!: Referencia[];
  parametro!: ParametroData;
  parametroExclusao!: ParametroData;
  parametroPaginador!: ParametroData;
  paginador!: Paginador;
  panelOpenState = true;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 50, 100];
  
  @ViewChild(MatPaginator) paginatorComponent: MatPaginator = <MatPaginator>{};

  constructor(private service: ApiService, private mensagem: MensagemService, private aguardeService: AguardeService, public dialog: MatDialog) { }

  ngOnInit() {    
    this.clean();
    this.find();
  }
  
  find(pageEvent?: PageEvent) {
    const aguarde = this.aguardeService.aguarde();
    
    if (pageEvent) {      
      this.parametro.pagina =  pageEvent.pageIndex + 1;      
    } else {
      if (this.paginatorComponent) {
        this.paginatorComponent.pageIndex = 0;      
      }
    }
    
    this.service.getList('referencia', this.parametro).subscribe(data => {
      console.log(data);
      this.dataSource = data.lista;
      this.paginador = data.paginador;
      this.length = this.paginador.totalPaginas;
      this.pageSize = this.paginador.total;
      aguarde.close();
    }, error => {
      console.log(error);
      
      this.mensagem.erro("Não foi possível executar a ação: " + error.message);
      aguarde.close();
    });
  }

  clean() {
    this.parametro = { limite: 10, pagina: 1, sentidoOrdenacao: "asc", ordenacaoPor: "id", filtros: { "descricao": "" }}
  }

  limpar(){
    this.clean();
    this.find();
  }

  openDialogEdit(selecionado: Referencia): void {
    const dialogRef = this.dialog.open(ReferenciaModalComponent, {
      width: '600px',
      data: selecionado
    });

    dialogRef.afterClosed().subscribe(() => {
      this.find();
    });
  }

  openDialogNew(): void {
    const novo = { id: null };
    const dialogRef = this.dialog.open(ReferenciaModalComponent, {
      width: '600px',
      data: novo
    });

    dialogRef.afterClosed().subscribe(() => {
      this.find();
    });
  }

  openDialogExcluir(selecionado: Referencia): void {
    Swal.fire({
      title: '' + 'Excluir Referência "' + selecionado.descricao + '"?',
      showDenyButton: true,      
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
      icon: 'question'
    }).then((result) => {
      if (result.isConfirmed) {
        const aguarde = this.aguardeService.aguarde();
        this.service.excluir('referencia', selecionado.id).subscribe(data => {
          aguarde.close();
          this.mensagem.sucesso(data.mensagem);
          this.find();
        }, error => {
          aguarde.close();
          this.mensagem.erro(error.error.message);
        });
      } else if (result.isDenied) {

      }
    })
  }
}

export interface Referencia {
  id: Number;
  descricao: String;
}
