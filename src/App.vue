<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>언어</th>
          <th>분야</th>
          <th>번호</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in data" :key="index">
          <td>{{ value.writer }}</td>
          <td>{{ value.title }}</td>
          <td>{{ value.content }}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
import data from '@/data/index'

export default {
  name: 'App',
  data() {
        return{
            data: data
        }
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
