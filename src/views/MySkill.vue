<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <leftside-skill />
            </div>
            <div class="col-md-8">
                <rightside-skill />
            </div>
        </div>
    </div>
</template>

<script>
import LeftsideSkill from '../components/skillComponents/LeftsideSkill.vue'
import RightsideSkill from '../components/skillComponents/RightsideSkill.vue'
    export default {
  components: { LeftsideSkill, RightsideSkill },
        
    }
</script>

<style lang="scss" scoped>

</style>