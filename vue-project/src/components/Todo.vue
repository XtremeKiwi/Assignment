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
  max-width: 700px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.add-task {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-task input {
  flex: 1;
  padding: 8px;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.task-content {
  flex: 1;
}

.task-content input {
  width: 100%;
  padding: 6px;
}

.completed span {
  text-decoration: line-through;
  color: gray;
}

.actions {
  display: flex;
  gap: 8px;
}

button {
  padding: 6px 12px;
  cursor: pointer;
}

.save-btn {
  background: #3498db;
  color: white;
  border: none;
}

.delete-btn {
  background: #e74c3c;
  color: white;
  border: none;
}
</style>