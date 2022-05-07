<template>
    <div class="container-fluid sticky-top">

        <div id="nav-home" class=" p-2 text-dark">
            <h3>به صفحه رحیم عین الهی خوش آمدید.</h3>
        </div>
        <hr>

        <div class="">
             <ul class="nav nav-pills p-1 " id="mainnav-top">
                    <div v-for="item in mainnavItems" :key="item.id">
                        <li class="nav-item" v-if="item.id!=5">
                            <router-link :class="item.itemClass" :to="item.itemPath">{{item.itemName}}</router-link>
                        </li>

                        <li class="nav-item dropdown" v-else>
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">{{item.itemName}}</a>
                            <ul class="dropdown-menu" >
                                <li v-for="nesItem in item.moreItems" :key="nesItem.id" class="">
                                    <router-link class="dropdown-item text-end" to="/">{{nesItem.itemName}}</router-link>
                                </li>
                            </ul>
                        </li>
                    </div>
             </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MainNavbar",
        data(){
            return{
                mainnavItems:[
                    {id:1, itemName:"خانه",       itemPath:'/', itemClass:'nav-link bg-success text-white mx-3'},
                    {id:2, itemName:"درباره من",  itemPath:'/aboutme', itemClass:'nav-link mx-3'},
                    {id:3, itemName:"تماس با ما", itemPath:'/contactus', itemClass:'nav-link mx-3'},
                    {id:4, itemName:"مهارت ها",    itemPath:'/skills', itemClass:'nav-link mx-3'},
                    {id:5,itemName:'بیشتر', moreItems:[
                        {id:51, itemName:"رزومه",                        itemPath:'/resume',   itemClass:'drop-item text-center mx-5 '},
                        {id:52, itemName:"توضیحات بیشتر در اینستاگرام", itemPath:'/more-explain',   itemClass:'drop-item text-center mx-5'},
                        {id:53, itemName:"موارد دیگر",                        itemPath:'/other-case',   itemClass:'drop-item text-center mx-5'},
                    ]},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '../../assets/scss/variable/variableHome.scss';
*{
    direction: rtl;
    
}
#nav-home{
    background-color: $clrTopPage;
    @font-face {
  font-family: myFirstFont;
  src: url('../../assets/fonts/Far_AdvertisingMedium.ttf');
}
}

#mainnav-top{
    background-color: $clrNavPage;
}
</style>