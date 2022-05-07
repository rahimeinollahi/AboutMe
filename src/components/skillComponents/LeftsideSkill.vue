<template>
    <div class="container mt-2">
        <div id="top-skill">
            <h4 class="mt-3 p-3">رحیم عین الهی</h4>
                <span class="d-block m-5">جونیور وب دوولوپر</span>
                <img src="../../assets/rahim.jpeg" alt="photo of rahim einollahi" class="p-1 img-fluid" style="max-width:100px">
        </div>
    
        <div id="bottom-skill">
            <router-link id="see-profile" class="btn p-2 m-3 text-white" to="/seeprofile">دیدن پروفایل </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LeftsideSkill'
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/variable/variableHome.scss';

    #top-skill, #bottom-skill{
        background-color: $cleBgskill;
    }
    img{
        border-radius: 50%;
    }
    #see-profile{
        background-color: $crlBtn;
    }
</style>