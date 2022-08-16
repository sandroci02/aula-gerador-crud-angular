
export interface Paginador {
  	totalPaginas: number;
    total: number;
	paginas: number[];
	elementos: number;
	pagina : number;
	proximo : number;
	anterior: number;
	asc: Boolean;
	order: String;
	resumo: String;
	semRegistro: Boolean;
}
