<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-sm-4">
                <social-network />
            </div>
            <div class="col-sm-8">
                <bodyof-contatus />
            </div>
        </div>
    </div>
</template>

<script>
import BodyofContatus from '../components/ContactUsComponents/BodyofContatus.vue'
import SocialNetwork from '../components/ContactUsComponents/SocialNetwork.vue'
    export default {
  components: { SocialNetwork, BodyofContatus },
        
    }
</script>

<style lang="scss" scoped>

</style>