import React, { useState } from 'react';
import '../../assests/css/Kanban.css'

const Kanban = () => {
  const [tasks, setTasks] = useState([
    { id: 1, status: 'todo' },
    { id: 2, status: 'inProgress' },
    { id: 3, status: 'done' },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData('taskId');
    const updatedTasks = tasks.map((task) => {
      if (task.id === parseInt(taskId)) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        title: newTask,
        status: 'todo',
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Kanban Board</h2>
      <div className="flex gap-4">
        <div
          className="flex-1 bg-gray-200 p-4"
          onDrop={(e) => handleDrop(e, 'todo')}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3 className="font-semibold mb-2">To Do</h3>
          <table className="w-full">
            <tbody>
              {tasks
                .filter((task) => task.status === 'todo')
                .map((task) => (
                  <tr
                    key={task.id}
                    className="bg-white p-2 mb-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                  >
                    <td>{task.title}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border border-gray-400 rounded-md p-2 mt-2"
              placeholder="Enter a new task"
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
            >
              Add Task
            </button>
          </div>
        </div>
        <div
          className="flex-1 bg-gray-200 p-4"
          onDrop={(e) => handleDrop(e, 'inProgress')}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3 className="font-semibold mb-2">In Progress</h3>
          <table className="w-full">
            <tbody>
              {tasks
                .filter((task) => task.status === 'inProgress')
                .map((task) => (
                  <tr
                    key={task.id}
                    className="bg-white p-2 mb-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                  >
                    <td>{task.title}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div
          className="flex-1 bg-gray-200 p-4"
          onDrop={(e) => handleDrop(e, 'done')}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3 className="font-semibold mb-2">Done</h3>
          <table className="w-full">
            <tbody>
              {tasks
                .filter((task) => task.status === 'done')
                .map((task) => (
                  <tr
                    key={task.id}
                    className="bg-white p-2 mb-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                  >
                    <td>{task.title}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kanban;