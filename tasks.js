const tasks = new Map();

const generateId = (() => {
    let i = 0;
    return () => ++i;
})();

const addTask = (task) => {
    const id = generateId();
    tasks.set(id, { ...task, done: task.done === 'true', id });
};

const updateTask = (id, task) => {
    tasks.set(id, { ...task, done: task.done === 'true', id });
}

const getTasks = () => Array.from(tasks.values());

const getTask = (id) => tasks.get(id);

const removeTask = (id) => tasks.delete(id);

module.exports = {
    addTask,
    updateTask,
    getTasks,
    getTask,
    removeTask,
}