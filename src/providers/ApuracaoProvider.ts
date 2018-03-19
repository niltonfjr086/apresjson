import { GenericProvider } from './GenericProvider';
import { HttpClient } from '@angular/common/http';
import { ProgramaOcorrencia } from '../entities/ProgramaOcorrencia';
import { Injectable } from '@angular/core';

@Injectable()
export class ApuracaoProvider extends GenericProvider<ProgramaOcorrencia> {

  constructor(public http: HttpClient) {
    // super(http, '../../assets/base-json/dados.json', new ProgramaOcorrencia("", 0, "", "", "", 0, 0, 0));

    super(http, '../../assets/base-json/dados.json', 
    
    {
      nom_programa: "", ano: 0, microrregiao: "", regional: "", municipio: "", familias_atendidas: 0, valor_financiado: 0, valor_subvencionado: 0
    }
    
    );
    
  }

}