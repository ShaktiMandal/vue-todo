<template>
    <div className="todo">This is todo</div>
    <div v-for="task in taskList" :key="task.id">
        {{ task.taskDescription }} 
        <button @click="delteTask(task.id)">Delete</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import  { useToDoStore } from '../stores/todostore';

const todoStore = useToDoStore();
const { deleteTask } = todoStore;
const taskList = computed(() => todoStore.todoList);

const delteTask = (id) => {
    deleteTask(id);
}
</script>
<style>
</style>