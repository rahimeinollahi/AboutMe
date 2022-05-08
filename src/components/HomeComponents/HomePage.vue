<template>
    <div class="container">
       <div class="row">
           <div class="col-sm-4 mt-3 mb-3 p-2" v-for="item in imageItems" :key="item.id">
                <div class="card w-100">
                <!-- <img class="card-img-top" :src="../../../public/images/01.jpg" alt="image photo" style="width:100%, height: 50%;"> -->
                <img class="card-img-top" :src="item.itemPath" alt="image photo" style="width:100%, height: 50%;">
                <div class="card-body">
                <h4 class="card-title">{{item.itemName}}</h4>
                <p class="card-text">{{item.itemExp}}</p>
                <router-link :to="item.itemPath" class="btn btn-primary">مشاهده بیشتر</router-link>
                </div>
            </div>
           
           </div>
          
       </div>
  <br>
  
        <pagination />
    </div>
</template>

<script>
import Pagination from './Pagination.vue'
    export default {
  components: { Pagination },
        name:'HomePage',
        data(){
            return{
                imageItems:[
                    {id:1, itemName:'عکس 1',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/01.jpg',itemClass:''},
                    {id:2, itemName:'عکس 2',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/02.jpg',itemClass:''},
                    {id:3, itemName:'عکس 3',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/03.jpg',itemClass:''},
                    {id:4, itemName:'عکس 4',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/04.jpg',itemClass:''},
                    {id:5, itemName:'عکس 5',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/05.jpg',itemClass:''},
                    {id:6, itemName:'عکس 6',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/06.jpg',itemClass:''},
                    {id:7, itemName:'عکس 7',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/07.jpg',itemClass:''},
                    {id:8, itemName:'عکس 8',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/08.jpg',itemClass:''},
                    {id:9, itemName:'عکس 9',itemExp:' توضیحات مربوطه', itemPath:'/../../../images/09.jpg',itemClass:''},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>