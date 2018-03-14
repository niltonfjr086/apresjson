import { GenericProvider } from './GenericProvider';
import { HttpClient } from '@angular/common/http';
import { ProgramaOcorrencia } from '../entities/ProgramaOcorrencia';
import { Injectable } from '@angular/core';

@Injectable()
export class ApuracaoProvider extends GenericProvider<ProgramaOcorrencia> {

  constructor(public http: HttpClient) {
    super(http, '../../assets/base-json/dados.json', new ProgramaOcorrencia("", 0, "", "", "", 0, 0, 0));

    // this.objectToFilter.nom_programa = "Programa 1";
    // this.objectToFilter.municipio = "Florianópolis";
    // this.objectToFilter.ano = 2010;

    // this.filter.toMakeFilter(this.objectToFilter);

    // this.viewSelects.toMakeFilter(this.objectToFilter);

  }

}