<template>
    <div>
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
    name: 'AppRead',
    data() {
        return{
            data: data
        }
    }
}
</script>

<style>
table{
    margin: 0 auto;
    border-collapse: collapse;
}

th, td{
    padding: 5px 10px;
    border: 1px solid black;    
}
</style>