<template>
    <div class="todo-list">
        <NavBread></NavBread>
<!--        <h3>ToDo List</h3>-->
        <hr>
        <TodoLists :data-source="list"></TodoLists>
    </div>
</template>

<script>
    import TodoLists from './../components/Todo-list'
    import NavBread from'@/components/Breadcrump'
    export default {
        name: "Todo",
        components: {
            TodoLists,
            NavBread
        },
        data() {
            return {
                url: '/todo/todolists',
                //url: 'https://api.myjson.com/bins/16l182',
                //url: 'http://localhost:8090/api/todolists',
                list: [],
            };
        },
        async created() {
            //this.fetch();
            // console.log(this.$store);
            await this.$store.dispatch('CHECKTODOLIST',{ url: this.url });
            /* 渲染view*/
            this.list = this.$store.state.list;
            debugger;
        },
        methods: {
            async fetch() {
                const { data } = await this.$http.get(this.url);
                console.log(data);
                this.list = data.list;
            }
        }
    }
</script>

<style scoped>

</style>
