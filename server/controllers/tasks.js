import Task from "../models/tasks";

class Tasks {
  async createTask(req, res) {
    const { title, description, priority } = req.body;
    const {user_id } = req.authorizedUser;
    
    const task = new Task({
      title,
      description,
      priority,
      userId: user_id
    });

    await task.save();

    res
      .status(200)
      .json({ status: 200, message: "task successfully created", task: task });
  }

  async getTasks(req, res) {
    const { user_id } = req.authorizedUser; 
    const tasks = await Task.find({userId: user_id});
    if(!tasks) return res.status(404).json({ status: 404, error: "No tasks found" });
    return res.status(200).json({ status: 200, tasks: tasks });
  }

  async getTask(req, res) {
    try {
      const {id: taskId} = req.params;
      const { user_id } = req.authorizedUser; 

      const task = await Task.findOne({
        $and: [
          { _id: taskId },
          { userId: user_id }
        ]
      });
      if (!task) return res.status(404).json({ status: 404, error: "Task not found!" });
      return res.status(200).json({ status: 200, task: task });
    } catch (err) {
      return res.status(400).json({ status: 400, error: "Invalid Id" });
    }
  }

  async editTask(req, res) {
      try {
        const { user_id } = req.authorizedUser;
        const { id: taskId } = req.params;
        const { title, description, priority } = req.body;

        const task = await Task.findOne({
          $and: [
            { _id: taskId },
            { userId: user_id }
          ]
        });
        if (!task) return res.status(404).json({ status: 404, error: "Task not found!" });
    
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
          .json({ status: 200, message: "successfully edited", task: task });
      } catch (err) {
        return res.status(400).json({ status: 400, error: "Invalid Id" }); 
      }
    
  }

  async deleteTask(req, res) {
    try {
      const { user_id } = req.authorizedUser;
      const { id: taskId } = req.params;

      const task = await Task.findOne(
        {
          $and: [
            { _id: taskId },
            { userId: user_id }
          ]
        }
      );
      
      await Task.deleteOne({
        $and: [
          { _id: taskId },
          { userId: user_id }
        ]
      });

      if (!task) return res.status(404).json({ status: 404, error: "Task not found!" });
      return res
        .status(204)
        .json({ status: 204, message: "deleted successfully" });
    } catch (err) {
        return res.status(400).json({ status: 400, error: "Invalid Id" });
    }
  }
}

export default new Tasks();
