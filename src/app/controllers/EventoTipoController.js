import EventoTipo from "../model/EventoTipo.js";
import EventoTipoRepository from "../repositories/EventoTipoRepository.js";

class EventoTipoController {
    async findAll(request, response) {
        try {
            const result = await EventoTipoRepository.findAll();
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    }

    async findById(request, response) {
        const id = request.params.id;
        try {
            const result = await EventoTipoRepository.findById(id);
            if (Object.keys(result).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                response.json(result);
            }
        } catch (error) {
            response.json(error);
        }
    }

    async findByNome(request, response) {
        const nome = request.params.nome;
        try {
            const result = await EventoTipoRepository.findByNome(nome);
            if (Object.keys(result).length == 0) {
                response.json({ message: "Nome not found" });
            } else {
                response.json(result);
            }
        } catch (error) {
            response.json(error);
        }
    }

    async updateById(request, response) {
        const id = request.params.id;
        console.log(id);
        console.log(request.body.eventoTipoNome);
        try {
            const exists = await EventoTipoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                try {
                    const eventoTipo = new EventoTipo(
                        request.body.eventoTipoNome
                    );
                    await EventoTipoRepository.updateById(id, eventoTipo);
                    response.json({ message: "Success" });
                } catch (error) {
                    response.json(error);
                }
            }
        } catch (error) {
            response.json(error);
        }
    }

    async deleteById(request, response) {
        const id = request.params.id;
        try {
            const exists = await EventoTipoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                await EventoTipoRepository.delete(id);
                response.json({ message: "Success" });
            }
        } catch (error) {
            response.json(error);
        }
    }

    async store(request, response) {
        try {
            const eventoTipo = new EventoTipo(
                request.body.eventoTipoNome
            );
            await EventoTipoRepository.create(eventoTipo);
            response.json({ message: "Success" });
        } catch (error) {
            response.json(error);
        }
    }
}
export default new EventoTipoController();