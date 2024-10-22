<template>
    <div>
        <h1>create page</h1>
        <input v-model="num" type="number" placeholder="번호"> <br>
        <input v-model="language" type="text" placeholder="언어"> <br>
        <input v-model="field" type="text" placeholder="분야"> <br>
        <button @click="write">작성</button>
    </div>
</template>

<script>
import data from '@/data/index'

export default {
    name: 'AppCreate',
    data(){
        return{
            data: data,
            num: "",
            language: "",
            field: ""
        }
    },
    methods: {
        write(){
            this.data.push({
                num: this.num,
                language: this.language,
                field: this.field
            })
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style scoped>
input{
    width: 200px;
    height: 30px;
    border: 1px solid black;
    margin: 5px;
    padding-left: 10px;
    border-radius: 5px;
}

button{
    border: none;
    background: #111;
    color: #fff;
    padding: 5px 20px;
    border-radius: 5px;
    margin: 5px;
}
</style>