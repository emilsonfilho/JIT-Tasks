import Evento from "../model/Evento.js";
import EventoRepository from "../repositories/EventoRepository.js";

class EventoController {
    async findAll(request, response) {
        try {
            const result = await EventoRepository.findAll();
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    }

    async findById(request, response) {
        const id = request.params.id;
        try {
            const result = await EventoRepository.findById(id);
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
            const result = await EventoRepository.findByNome(nome);
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
        try {
            const exists = await EventoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                try {
                    const evento = new Evento(
                        request.body.eventoNome,
                        request.body.eventoTipo,
                        request.body.eventoDataInicial,
                        request.body.eventoDataFinal,
                        request.body.eventoCargaHoraria,
                    );
                    await EventoRepository.updateById(id, evento);
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
            const exists = await EventoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                await EventoRepository.delete(id);
                response.json({ message: "Success" });
            }
        } catch (error) {
            response.json(error);
        }
    }

    async store(request, response) {
        try {
            const evento = new Evento(
                request.body.eventoNome,
                request.body.eventoTipo,
                request.body.eventoDataInicial,
                request.body.eventoDataFinal,
                request.body.eventoCargaHoraria,
            );
            await EventoRepository.create(evento);
            response.json({ message: "Success" });
        } catch (error) {
            response.json(error);
        }
    }
}
export default new EventoController();