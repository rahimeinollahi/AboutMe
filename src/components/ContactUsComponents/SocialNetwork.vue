<template>
    <div>
        <div class="border p-3 d-flex flex-column justify-content-center bg-light">
            <h1 class="text-info">راه های ارتباطی با من</h1>
            <h4 class="text-dark">می توانید از طریق شبکه های اجتماعی دنبال کنید.</h4>
        </div>
        <div class=" p-3 flex-column justify-content-center">
            <ul class="nav  flex-column justify-content-center">
                <li class="nav-item mt-3 bg-light" v-for="item in contactItems" :key="item.id">
                   <a :href="item.itemSrc" class=""><span :class="item.itemClass"> {{item.itemName}} </span></a>
                   
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'SocialNetwork',
        data(){
            return{
                contactItems:[
                    {id:2, itemName:'فیس بوک',itemSrc:'https://www.facebook.com/', itemClass:'fa fa-facebook p-2 mx-5'},
                    {id:1, itemName:'توییتر',itemSrc:'https://twitter.com/sarah_edo/status/850951224748888064', itemClass:'fa fa-twitter p-2'},
                    {id:3, itemName:'اینستاگرام',itemSrc:'https://www.instagram.com/', itemClass:'fa fa-instagram p-2'},
                    {id:4, itemName:'تلگرام',itemSrc:'', itemClass:'fa fa-telegram p-2'},
                    {id:5, itemName:'استک اورفلو',itemSrc:'https://stackoverflow.com/', itemClass:'fa fa-stack-overflow p-2'},
                    {id:6, itemName:'گیت هاب',itemSrc:'https://github.com/rahimeinollahi', itemClass:'fa fa-github p-2'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>