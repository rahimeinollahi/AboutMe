<template>
    <div>
        <ul class="pagination fixed-bottom justify-content-center">
            <li class="page-item" v-for="item in pagItems" :key="item.id">
                <router-link class="page-link mx-1" :to="item.itemPath">{{item.itemName}}</router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name:"Pagination",
        data(){
            return{
                pagItems:[
                    {id:1, itemName:'Previous',itemPath:'/'},
                    {id:2, itemName:'1',itemPath:'/home2'},
                    {id:3, itemName:'2',itemPath:'/'},
                    {id:4, itemName:'3',itemPath:'/home2'},
                    {id:5, itemName:'4',itemPath:'/'},
                    {id:6, itemName:'Next',itemPath:'/home2'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>