class Petiano {
    _petianoId;
    _petianoNome;
    _petianoCurso;
    _petianoDataIngresso;
    _petianoDataSaida;
    _petianoCaminhoFoto;

    constructor(petianoNome, petianoCurso, petianoDataIngresso, petianoDataSaida, petianoCaminhoFoto) {
        this._petianoNome = petianoNome;
        this._petianoCurso = petianoCurso;
        this._petianoDataIngresso = petianoDataIngresso;
        this._petianoDataSaida = petianoDataSaida;
        this._petianoCaminhoFoto = petianoCaminhoFoto;
    }

    get petianoId() {
        return this._petianoId;
    }
    get petianoNome() {
        return this._petianoNome;
    }
    get petianoCurso() {
        return this._petianoCurso;
    }
    get petianoDataIngresso() {
        return this._petianoDataIngresso;
    }
    get petianoDataSaida() {
        return this._petianoDataSaida;
    }
    get petianoCaminhoFoto() {
        return this._petianoCaminhoFoto;
    }

    set petianoNome(value) {
        this._petianoNome = value;
    }
    set petianoCurso(value) {
        this._petianoCurso = value;
    }
    set petianoDataIngresso(value) {
        this._petianoDataIngresso = value;
    }
    set petianoDataSaida(value) {
        this._petianoDataSaida = value;
    }
    set petianoCaminhoFoto(value) {
        this._petianoCaminhoFoto = value;
    }


}

export default Petiano;
