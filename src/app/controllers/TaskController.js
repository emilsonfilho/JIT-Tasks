import Task from "../model/Task.js";
import TaskRepository from "../repositories/TaskRepository.js";

class TaskController {
    _buildTask(body) {
    return new Task(
      body.title,
      body.description,
      body.is_finished,
      body.priority_id
    )
  }

  _isEmpty(obj) {
    return !obj || Object.keys(obj).length == 0;
  }

  async findAll(request, response) {
    try {
      const result = await TaskRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.id;
    try {
      const result = await TaskRepository.findById(id);
      if (this._isEmpty(result)) {
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
      if (this._isEmpty(exists)) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const task = this._buildTask(request.body)
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
      if (this._isEmpty(exists)) {
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
      
      const task = this._buildTask(request.body)
      await TaskRepository.create(task);
      response.json({ message: "Success" });
    } catch (error) {
      response.json(error);
    }
  }
}

//using singleton pattern
export default new TaskController();
