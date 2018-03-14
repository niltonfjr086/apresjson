export class ProgramaOcorrencia {

	private _nom_programa: string;
	private _ano: number;
	private _microrregiao: string;
	private _regional: string;
	private _municipio: string;
	private _familias_atendidas: number;
	private _valor_financiado: number;
	private _valor_subvencionado: number;


	constructor(nom_programa: string, ano: number, microrregiao: string, regional: string, municipio: string, familias_atendidas: number, valor_financiado: number, valor_subvencionado: number) {
		this._nom_programa = nom_programa;
		this._ano = ano;
		this._microrregiao = microrregiao;
		this._regional = regional;
		this._municipio = municipio;
		this._familias_atendidas = familias_atendidas;
		this._valor_financiado = valor_financiado;
		this._valor_subvencionado = valor_subvencionado;
	}

	// constructor() {
	// }

	public get nom_programa(): string {
		return this._nom_programa;
	}

	public set nom_programa(value: string) {
		this._nom_programa = value;
	}

	public get ano(): number {
		return this._ano;
	}

	public set ano(value: number) {
		this._ano = value;
	}

	public get microrregiao(): string {
		return this._microrregiao;
	}

	public set microrregiao(value: string) {
		this._microrregiao = value;
	}

	public get regional(): string {
		return this._regional;
	}

	public set regional(value: string) {
		this._regional = value;
	}

	public get municipio(): string {
		return this._municipio;
	}

	public set municipio(value: string) {
		this._municipio = value;
	}

	public get familias_atendidas(): number {
		return this._familias_atendidas;
	}

	public set familias_atendidas(value: number) {
		this._familias_atendidas = value;
	}

	public get valor_financiado(): number {
		return this._valor_financiado;
	}

	public set valor_financiado(value: number) {
		this._valor_financiado = value;
	}

	public get valor_subvencionado(): number {
		return this._valor_subvencionado;
	}

	public set valor_subvencionado(value: number) {
		this._valor_subvencionado = value;
	}

}