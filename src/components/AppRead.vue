<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>언어</th>
                    <th>분야</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, index) in data" :key="index">
                    <td>{{ value.content }}</td>
                    <td>{{ value.writer }}</td>
                    <td>{{ value.title }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">
                        <button @click="write">글쓰기</button>
                    </td>
                </tr>
            </tfoot>
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
    },
    methods: {
        write(){
            this.$router.push({
                path: 'create'
            })
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

button{
    border: none;
    background: #111;
    color: #fff;
    padding: 5px 20px;
    border-radius: 5px;
}
</style>