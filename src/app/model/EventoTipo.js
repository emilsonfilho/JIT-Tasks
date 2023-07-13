class EventoTipo {
    _eventoTipoId;
    _eventoTipoNome;

    constructor(eventoTipoNome) {
        this._eventoTipoNome = eventoTipoNome;
    }

    get eventoTipoId() {
        return this._eventoTipoId;
    }
    get eventoTipoNome() {
        return this._eventoTipoNome;
    }

    set eventoTipoNome(value) {
        this._eventoTipoNome = value;
    }

}

export default EventoTipo;
