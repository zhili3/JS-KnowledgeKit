<template>
    <div>
        <input placeholder="请输入备忘事项" v-model="todoThing" />
        <button v-on:click="handleAdd">添加</button>
        <ul>
          <todo-item v-for="(todoitem , index) of Todos"
          v-bind:index="index"
           v-bind:itemname="todoitem"
           :key='index'
           @delete='deleteItem'>
           </todo-item>
        </ul>
    </div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
  data () {
    return {
      Todos: [],
      todoThing: ''
    }
  },
  components: {
    'todo-item': TodoItem
  },
  methods: {
    handleAdd () {
      this.Todos.push(this.todoThing)
      this.todoThing = ''
    },
    deleteItem (index) {
      this.Todos.splice(index, 1)
    }
  }
}
</script>

<style>
  li{
    color: green;
  }

</style>
