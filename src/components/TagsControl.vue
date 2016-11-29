<template>
    <div>
        <el-input placeholder="Please input" v-model="criteriaInput" style="width: 300px;">
            <el-button slot="append" icon="plus" @click.prevent="addCriterion"></el-button>
        </el-input>
        <div style="margin-top:10px;">
            <el-tag v-for="c in currentTeamTags" :closable="true" type="primary" @close="discardCurrentTeamTags(c)" style="margin-right: 10px">
                {{c}}
            </el-tag>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            criteriaInput: '',
        }
    },
    computed : {
        ...mapGetters(['currentTeamTags'])
    },
    methods: {
        ...mapActions(['discardCurrentTeamTags']),
        addCriterion(){
            this.$store.dispatch('addCurrentTeamTags', this.criteriaInput)
            this.criteriaInput = ''
        }
    },
}
</script>