<template>
    <div class="v-commond">
        <h3 style="padding-left: 45%">vue-指令</h3>
        <ol style="padding-left: 45%">
            <li v-for="(item,index) in items" :key="index">
                {{ item.text }}
            </li>
<!--            <li>v-text: 渲染文本的   content</li>-->
<!--            <li>v-html 渲染html 标签</li>-->
<!--            <li>v-if/v-else 控制条件</li>-->
<!--            <li>v-show</li>-->
<!--            <li>v-for 列表</li>-->
<!--            <li>v-on(@) 绑定事件监听</li>-->
<!--            <li>v-bind(:) 动态属性绑定dom</li>-->
<!--            <li>v-model 单向绑定</li>-->
        </ol>
    </div>
</template>

<script>
    export default {
        name: "VCommond",
        data() {
            return {
                items: [
                    { text: 'v-text: 渲染文本的'},
                    { text: 'v-html 渲染html 标签'},
                    { text: 'v-if/v-else 判断控制'},
                    { text: 'v-show显示'},
                    { text: 'v-for 列表'},
                    { text: 'v-on(@) 绑定事件监听'},
                    { text: 'v-bind(:) 动态属性绑定dom'},
                    { text: 'v-model 双向绑定'}
                ]
            };
        },

    }
</script>

<style scoped>
li{
    margin-top: 20px;

}
</style>
