<template>
    <div class="todolists">
        <h3 style="padding-left: 45%">ToDo List</h3>

        <el-row>
            <el-input v-model="newItem"  placeholder="plan to do ……" style="padding-left:42%;width: 200px"></el-input>
            <el-button type="success" icon="el-icon-check" circle style="margin-left: 20px" @click="addNew"></el-button>
        </el-row>
        <ol style="padding-left: 45%">
            <li v-for="(item, index) in dataSource" :key="index"
                @click="finishHandler(item)"
                class="todo-list-li"
            >
                <del v-if="item.done" class="del-todo-list">{{ item.text }}</del>
                <span v-else>{{ item.text }}</span>
            </li>
            <li v-for="(item,index) in items" :key="index" :class="{ finished: item.isFinished }"
                @click="toggleFinished(item)">
                <del v-if="item.isFinished" class="del-todo-list">{{ item.label }}</del>
                <span v-else>{{ item.label }}</span>
            </li>
        </ol>
    </div>
</template>
<script>
    export default {
        name: "Todo-list",
        props: {
            dataSource: Array
        },
        data() {
            return {
                inputTodoData: '',
                newItem: '',
                todo: '',
                items: []
            }
        },
        methods: {
            finishHandler(item) {
                item.done = !item.done;
            },
            toggleFinished(item){
                item.isFinished = !item.isFinished
            },
            addNew(){
                if(this.newItem === ''){
                    alert("请输入你的计划~")
                }else{
                    this.items.push({
                        label: this.newItem,
                        isFinished: false
                    });
                    this.newItem = ''
                }
            }
        }
    }
</script>

<style scoped>
li{
    margin-top: 20px;
}
</style>
