import Task from "../model/Task.js";
import TaskRepository from "../repositories/TaskRepository.js";

class TaskController {
  async findAll(request, response) {
    try {
      const result = await TaskRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findAllPending(request, response) {
    try {
      const result = await TaskRepository.findAllPending();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.id;
    try {
      const result = await TaskRepository.findById(id);
      if (!result || Object.keys(result).length === 0) {
        response.json({ message: "ID not found" });
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
      const exists = await TaskRepository.findById(id);
      if (!exists || Object.keys(exists).length === 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const task = new Task(request.body.title, request.body.description, request.body.is_finished, request.body.priority_id);
          await TaskRepository.update(id, task);
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
      const exists = await TaskRepository.findById(id);
      if (!exists || Object.keys(exists).length === 0) {
        response.json({ message: "ID not found" });
      } else {
        await TaskRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const task = new Task(request.body.title, request.body.description, request.body.is_finished, request.body.priority_id);
      await TaskRepository.create(task);
      response.json({ message: "Success" });
    } catch (error) {
      response.json(error);
    }
  }

  async getMetrics(request, response) {
    try {
      const result = await TaskRepository.getDailyMetrics();
      response.json(result[0]);
    } catch (error) {
      response.json(error);
    }
  }
}

//using singleton pattern
export default new TaskController();
