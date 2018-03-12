import { GenericProvider } from './GenericProvider';
import { HttpClient } from '@angular/common/http';
import { ProgramaOcorrencia } from '../entities/ProgramaOcorrencia';
import { Injectable } from '@angular/core';

@Injectable()
export class ApuracaoProvider extends GenericProvider<ProgramaOcorrencia> {

  constructor(public http: HttpClient) {
    super(http, '../../assets/base-json/dados.json');
  }

}