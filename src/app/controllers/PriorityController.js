import PriorityRepository from "../repositories/PriorityRepository.js";
import TaskRepository from "../repositories/TaskRepository.js";

class PriorityController {
  async findAll(request, response) {
    try {
      const result = await PriorityRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }
}

export default new PriorityController();
