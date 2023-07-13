import Pessoa from "../model/Pessoa.js";
import PessoaRepository from "../repositories/PessoaRepository.js";

class PessoaController {
  async findAll(request, response) {
    try {
      const result = await PessoaRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.id;
    try {
      const result = await PessoaRepository.findById(id);
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
      const result = await PessoaRepository.findByNome(nome);
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
      const exists = await PessoaRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const pessoa = new Pessoa(
            request.body.pessoaNome,
            request.body.pessoaEmail,
            request.body.pessoaMatricula,
            request.body.pessoaCurso,
            request.body.pessoaRfid,
            request.body.pessoaCpf,
            request.body.pessoaExterna,
            request.body.pessoaResponsavel
          );
          await PessoaRepository.update(id, pessoa);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async findByMatricula(request, response) {
    const matricula = request.params.matricula;
    try {
      const result = await PessoaRepository.findByMatricula(matricula);
      if (Object.keys(result).length == 0) {
        response.json({ message: "Matricula not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async deleteById(request, response) {
    const id = request.params.id;
    try {
      const exists = await PessoaRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await PessoaRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const pessoa = new Pessoa(
        request.body.pessoaNome,
        request.body.pessoaEmail,
        request.body.pessoaMatricula,
        request.body.pessoaCurso,
        request.body.pessoaRfid,
        request.body.pessoaCpf,
        request.body.pessoaExterna,
        request.body.pessoaResponsavel
      );
      await PessoaRepository.create(pessoa);
      response.json({ message: "Success" });
    } catch (error) {
      response.json(error);
    }
  }
}
export default new PessoaController();
