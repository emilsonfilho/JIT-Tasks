class Evento {
    _eventoId;
    _eventoNome;
    _eventoTipo;
    _eventoDataInicial;
    _eventoDataFinal;
    _eventoCargaHoraria;

    constructor(eventoNome, eventoTipo, eventoDataInicial, eventoDataFinal, eventoCargaHoraria) {
        this._eventoNome = eventoNome;
        this._eventoTipo = eventoTipo;
        this._eventoDataInicial = eventoDataInicial;
        this._eventoDataFinal = eventoDataFinal;
        this._eventoCargaHoraria = eventoCargaHoraria;
    }

    get eventoId() {
        return this._eventoId;
    }
    get eventoNome() {
        return this._eventoNome;
    }
    get eventoTipo() {
        return this._eventoTipo;
    }
    get eventoDataInicial() {
        return this._eventoDataInicial;
    }
    get eventoDataFinal() {
        return this._eventoDataFinal;
    }
    get eventoCargaHoraria() {
        return this._eventoCargaHoraria;
    }


    set eventoNome(value) {
        this._eventoNome = value;
    }
    set eventoTipo(value) {
        this._eventoTipo = value;
    }
    set eventoDataInicial(value) {
        this._eventoDataInicial = value;
    }
    set eventoDataFinal(value) {
        this._eventoDataFinal = value;
    }
    set eventoCargaHoraria(value) {
        this._eventoCargaHoraria = value;
    }


}

export default Evento;
