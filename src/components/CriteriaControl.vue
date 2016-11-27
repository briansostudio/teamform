<template>
    <div>
        <el-input placeholder="Please input" v-model="criteriaInput" style="width: 300px;">
            <el-button slot="append" icon="plus" @click.prevent="addCriterion"></el-button>
        </el-input>
        <div>
            <el-tag v-for="c in eventScopedCriteria" :closable="true" type="primary" @close="discardRecruitCriteria(c)" style="margin-right: 10px">
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
        ...mapGetters(['eventScopedCriteria'])
    },
    methods: {
        ...mapActions(['discardRecruitCriteria']),
        addCriterion(){
            this.$store.dispatch('addRecruitCriteria', this.criteriaInput)
            this.criteriaInput = ''
        }
    }
}
</script>