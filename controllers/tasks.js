import Task from "../models/tasks";

class Tasks {
  async createTask(req, res) {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
    });
    await task.save();
    res
      .status(200)
      .send({ status: 200, message: "task successfully created", task: task });
  }

  async getTasks(req, res) {
    const tasks = await Task.find();
    res.status(200).send({ status: 200, tasks: tasks });
  }

  async getTask(req, res) {
    try {
      const task = await Task.findOne({ _id: req.params.id });
      if (!task) return res.status(404).send({ status: 404, error: "Task not found!" });
      return res.status(200).send({ status: 200, task: task });
    } catch (err) {
      return res.status(400).send({ status: 400, error: "Invalid Id" });
    }
  }

  async editTask(req, res) {
      try {
        const { title, description, priority } = req.body;
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) return res.status(404).send({ status: 404, error: "Task not found!" });
    
        if (title) {
          task.title = title;
        }
    
        if (description) {
          task.description = description;
        }
    
        if (priority) {
          task.priority = priority;
        }

        task.updatedAt = new Date();
    
        await task.save();
        return res
          .status(200)
          .send({ status: 200, message: "successfully edited", task: task });
      } catch (err) {
        return res.status(400).send({ status: 400, error: "Invalid Id" }); 
      }
    
  }

  async deleteTask(req, res) {
    try {
      const task = await Task.findOne({ _id: req.params.id });
      await Task.deleteOne({ _id: req.params.id });
      if (!task) return res.status(404).send({ status: 404, error: "Task not found!" });
      return res
        .status(204)
        .send({ status: 204, message: "deleted successfully" });
    } catch (err) {
        return res.status(400).send({ status: 400, error: "Invalid Id" });
    }
  }
}

export default new Tasks();
