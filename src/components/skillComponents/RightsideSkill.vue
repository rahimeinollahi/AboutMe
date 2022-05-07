<template>
    <div class="container mt-3">
       <div class="border p-5">
                <div class="">
                <h2 class="display-2 text-end"><span id="span-title">مهارت های من</span></h2>
                </div>
                
                <div class="progress  mt-5">
                    <div class="progress-bar  bg-success" style="width:75%"><span class="m-4">HTML5 75%</span></div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-info" style="width:70%">Css3 70%</div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-warning" style="width:60%">Bootstrap5 60%</div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-warning" style="width:60%">JavaScript 60%</div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-danger" style="width:20%">Git 20%</div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-info" style="width:60%">Vuejs 60%</div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-info" style="width:50%">Pinia 50%</div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-info" style="width:60%">Vue Router 60%</div>
                </div>

                <div class="progress mt-5">
                    <div class="progress-bar bg-info" style="width:60%">Englishg Language 60%</div>
                </div>
       </div>

            <hr>

        <div class="border p-4">
            <div class="p-4">
                <h4 class="text-end display-4 text-info p-3">مهارت های نرم</h4>
            </div>

            <div class="progress mt-5">
                <div class="progress-bar bg-info" style="width:60%">60%Problem Solving</div>
            </div>

            <div class="progress mt-5">
                <div class="progress-bar bg-success" style="width:70%">70%Time Management</div>
            </div>

            <div class="progress mt-5">
                <div class="progress-bar bg-warning" style="width:50%">50% Creativity</div>
            </div>

            <div class="progress mt-5">
                <div class="progress-bar bg-warning" style="width:55%">55% Commmunications</div>
            </div>

            <div class="progress mt-5">
                <div class="progress-bar bg-danger" style="width:40%">55% TeamWork</div>
            </div>

            <div class="progress mt-5">
                <div class="progress-bar bg-success" style="width:70%">55% Adapttability</div>
            </div>

            <div class="progress mt-5">
                <div class="progress-bar bg-warning" style="width:35%">35% LeaderShip</div>
            </div>
        </div>

        <div class="border p-4 mt-3">
            <h4 class="text-end"> <i class="bi-alarm"></i> تجربه کاری</h4>
           
        </div>
           
    </div>
</template>

<script>
    export default {
        name:'rightsidekill'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variable/variableHome.scss';

*{
    direction: rtl;
    
    @font-face {
        font-family: myFirstFont;
         src: url('../../assets/fonts/Far_AdvertisingMedium.ttf');
    }
}

h2{
    color: $clrText;
   
  
}
h4{
    // background-color: $clrMiddle;
    
}
</style>