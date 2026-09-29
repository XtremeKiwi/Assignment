<template>
  <div class="todo-container">

    <div class="add-task">
      <input
        v-model="newTask"
        @keyup.enter="addTodo"
        placeholder="Enter a new task..."
      />
      <button @click="addTodo">Add Task</button>
    </div>

    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <div class="task-content">
          <!-- Display Mode -->
          <span v-if="!todo.editing">
            {{ todo.text }}
          </span>

          <!-- Edit Mode -->
          <input
            v-else
            v-model="todo.text"
            @keyup.enter="todo.editing = false"
          />
        </div>

        <div class="actions">
          <button @click="toggleComplete(todo.id)">
            {{ todo.completed ? 'Undo' : 'Complete' }}
          </button>

          <button
            v-if="!todo.editing"
            @click="todo.editing = true"
          >
            Edit
          </button>

          <button
            v-else
            class="save-btn"
            @click="todo.editing = false"
          >
            Save
          </button>

          <button
            class="delete-btn"
            @click="deleteTodo(todo.id)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const todos = ref([
  {
    id: 1,
    text: 'Learn Vue Router',
    completed: true,
    editing: false
  },
  {
    id: 2,
    text: 'Build a Todo App',
    completed: false,
    editing: false
  },
  {
    id: 3,
    text: 'Practice SQL Queries',
    completed: false,
    editing: false
  }
])

const addTodo = () => {
  if (!newTask.value.trim()) return

  todos.value.push({
    id: Date.now(),
    text: newTask.value,
    completed: false,
    editing: false
  })

  newTask.value = ''
}

const toggleComplete = (id) => {
  const todo = todos.value.find(todo => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
  }
}

const deleteTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>
<style scoped>
.todo-container {
  width: 600px;
  padding: 1.25rem;
  border: 1px solid rgba(147,255,191,0.26);
  border-radius: 16px;
  background: rgba(255,255,255,0.06);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  margin: 0 auto;
}

.add-task {
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.add-task input {
  flex: 1;
  padding: 0.7rem 0.8rem;
  border: 1px solid rgba(147,255,191,0.26);
  border-radius: 10px;
  background: rgba(147,255,191,0.26);
  font-size: 0.95rem;
}

.add-task input:focus,
.task-content input:focus {
  outline: none;
  border-color: #7aa8ff;
  box-shadow: 0 0 0 4px rgba(122, 168, 255, 0.08);
}

.add-task button,
.actions button {
  padding: 0.6rem 0.85rem;
  border-radius: 10px;
  border: 1px solid rgba(147,255,191,0.26);
  background: #fff;
  color: #222;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.add-task button:hover,
.actions button:hover {
  transform: translateY(-1px);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0.9rem;
  border: 1px solid rgba(147,255,191,0.26);
  border-radius: 12px;
  background: rgba(255,255,255,0.06);
}

.task-content {
  flex: 1;
  min-width: 0;
  color: #999;
}

.task-content input {
  width: 100%;
  padding: 0.55rem 0.6rem;
  border-radius: 8px;
  border: 1px solid rgba(147,255,191,0.26);
  box-sizing: border-box;
}

.completed .task-content span {
  text-decoration: line-through;
  color: #777;
}

.actions {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.save-btn {
  background: #2f2f2f;
  color: #fff;
  border-color: #2f2f2f;
}

.delete-btn {
  background: #f4f4f4;
  color: #333;
}
</style>