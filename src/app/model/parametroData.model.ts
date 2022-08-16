import { NonNullableFormBuilder } from "@angular/forms";

export interface ParametroData {
    filtros?: any;
    limite: Number;
    pagina: Number;
    sentidoOrdenacao: String;
    ordenacaoPor: String;
}
