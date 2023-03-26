<template>
    <div class="card">
      <div class="card-first">
        <div>{{item.title}}</div>
      </div>
      <div class="card-seconde">
          <div class="second-right">
              <span class="describe">{{text}}...</span>
              <div class="card-thrid">
          <div >
              <span class="iconfont icon-diamond  ac mr-1"></span> 
              <span class="ac">{{item.heat}}</span>
          </div>

          <div >
              <span class="ot">{{item.author}}</span>
          </div>
          <div>
              <span class="iconfont icon-pinglun  ot mr-1"></span>
              <span class="ot">{{item.discuss}}</span>
          </div>
          <div>
              <span class="iconfont icon-shoucang  ot mr-1"></span>
              <span class="ot">{{item.collect}}</span>
          </div>
      </div>
          </div>
          <img  v-if="item.img!=null"  :src="item.img" alt="">
      </div>
     
  </div>
</template>

<script setup>
import {ref,computed} from "vue";
const props= defineProps({
  item:{
      trpe:Object,
      required:true
  }
})
const i=props.item.describe;
const text=computed(()=>{
  console.log("a:"+i);
  return i.substring(0,80);
  
})
</script>

<style scoped>
@import url("../assets/font/iconfont.css");
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 625px;
  margin-top: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}
.card-first div{
  max-width: 1000px;
  padding-bottom: 5px;
  overflow: hidden;

  /* -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap; */
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}
.card-seconde{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.second-right{
  flex:8;
  display: flex;
  flex-direction: column;
}
.card-seconde .second-right .describe{
  display: inline-block;
  font-size: 13px;
  color: #999;
}
.card-seconde img{
  flex: 3;
  width: 130px;
  height: 100px;
  border-radius: 5px;
  margin-left: 20px;
}

.card-thrid{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.card-thrid div{
  margin-right: 12px;
}
.card-thrid span{
  font-size: 11px;
}
.mr-1{
  margin-right: 3px;
}
.ac{
  color: #EA6F5A;
  font-size: 10px;
}
.ot{
  color: #b4b4b4;
}
</style>