class Pessoa {
  _pessoaId;
  _pessoaNome;
  _pessoaEmail;
  _pessoaMatricula;
  _pessoaCurso;
  _pessoaRfid;
  _pessoaCpf;
  _pessoaExterna;
  _pessoaResponsavel;

  constructor(pessoaNome, pessoaEmail, pessoaMatricula, pessoaCurso, pessoaRfid, pessoaCpf, pessoaExterna, pessoaResponsavel) {
    this._pessoaNome = pessoaNome;
    this._pessoaEmail = pessoaEmail;
    this._pessoaMatricula = pessoaMatricula;
    this._pessoaCurso = pessoaCurso;
    this._pessoaRfid = pessoaRfid;
    this._pessoaCpf = pessoaCpf;
    this._pessoaExterna = pessoaExterna;
    this._pessoaResponsavel = pessoaResponsavel;
  }

  get pessoaId() {
    return this._pessoaId;
  }
  get pessoaNome() {
    return this._pessoaNome;
  }
  get pessoaEmail() {
    return this._pessoaEmail;
  }
  get pessoaMatricula() {
    return this._pessoaMatricula;
  }
  get pessoaCurso() {
    return this._pessoaCurso;
  }
  get pessoaRfid() {
    return this._pessoaRfid;
  }
  get pessoaCpf() {
    return this._pessoaCpf;
  }
  get pessoaExterna() {
    return this._pessoaExterna;
  }
  get pessoaResponsavel() {
    return this._pessoaResponsavel;
  }

  set pessoaNome(value) {
    this._pessoaNome = value;
  }
  set pessoaEmail(value) {
    this._pessoaEmail = value;
  }
  set pessoaMatricula(value) {
    this._pessoaMatricula = value;
  }
  set pessoaCurso(value) {
    this._pessoaCurso = value;
  }
  set pessoaRfid(value) {
    this._pessoaRfid = value;
  }
  set pessoaCpf(value) {
    this._pessoaCpf = value;
  }
  set pessoaExterna(value) {
    this._pessoaExterna = value;
  }
  set pessoaResponsavel(value) {
    this._pessoaResponsavel = value;
  }

}

export default Pessoa;
