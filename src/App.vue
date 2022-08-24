

<template>
  <div>this is todo app</div>
  <div class="addtodosection">
    <input type="text" @input="onInput"/>
    <button @click="addYourTask">Add</button>
    <button @click="fetchData">Fetch</button>
  </div>
  <TodoList />
</template>
<script setup>
import { ref } from 'vue';
import { TodoList } from "./components/index";
import { useToDoStore } from './stores/todostore';

const { addTask, retriveData } = useToDoStore();
const taskDescription = ref("");

const onInput = (event) => {
  event.preventDefault();
  taskDescription.value = event.target.value;
}

const fetchData = () => {
  retriveData();
}
const addYourTask = (event) => {
  event.preventDefault();
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  addTask({
    id: random(1, 10).toString(),
    taskDescription: taskDescription.value,
  });
  taskDescription.value = "";
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
