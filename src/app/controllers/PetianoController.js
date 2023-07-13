import Petiano from "../model/Petiano.js";
import PetianoRepository from "../repositories/PetianoRepository.js";

class PetianoController {
    async findAll(request, response) {
        try {
            const result = await PetianoRepository.findAll();
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    }

    async findById(request, response) {
        const id = request.params.id;
        try {
            const result = await PetianoRepository.findById(id);
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
            const result = await PetianoRepository.findByNome(nome);
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
            const exists = await PetianoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                try {
                    const petiano = new Petiano(
                        request.body.petianoNome,
                        request.body.petianoCurso,
                        request.body.petianoDataIngresso,
                        request.body.petianoDataSaida,
                        request.body.petianoCaminhoFoto
                    );
                    await PetianoRepository.update(id, petiano);
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
            const exists = await PetianoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                await PetianoRepository.delete(id);
                response.json({ message: "Success" });
            }
        } catch (error) {
            response.json(error);
        }
    }

    async store(request, response) {
        try {
            const petiano = new Petiano(
                request.body.petianoNome,
                request.body.petianoCurso,
                request.body.petianoDataIngresso,
                request.body.petianoDataSaida,
                request.body.petianoCaminhoFoto
            );
            await PetianoRepository.create(petiano);
            response.json({ message: "Success" });
        } catch (error) {
            response.json(error);
        }
    }
}
export default new PetianoController();