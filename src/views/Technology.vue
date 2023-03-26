<template>
    <div class="container">
        <div class="con-left">
            <RouterLink to="back">后端</RouterLink>
            <RouterLink to="qianduan">前端</RouterLink>
            <RouterLink to="andriod">Andriod</RouterLink>
            <RouterLink to="ios">IOS</RouterLink>
            <RouterLink to="artificial">人工智能</RouterLink>
        </div>
        <div class="con-right">
            <RouterView></RouterView>
        </div>

    </div>



    

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style  scoped>
.container{
    margin-top: 80px;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
}
.con-left{
    flex: 3;
    position: fixed;
    background-color: white;
}
.con-right{
    flex: 7;
    margin-left: 32%;
}


.con-left a{
    text-decoration: none;
    display: inline-block;
    width: 100%;
    
    height: 42px;
    line-height: 42px;
    border-radius: 5px;
    padding-left: 10px;
    color: black;
}
.con-left a.router-link-active{
    color: #ea6f5a;
    background-color: #F0F0F0F0;
}
</style>