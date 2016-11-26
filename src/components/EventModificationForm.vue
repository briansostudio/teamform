<template>
    <div class="page">

    <div class="fab">
        <el-form ref="form" label-width="180px" style="margin: 60px 60px 60px 60px;">
            <el-form-item label="Event Title">
                <el-input :value="currentEvent.name" @input="updateEventName"></el-input>
            </el-form-item>
            <el-form-item label="Event Description">
                <el-input type="textarea" :value="currentEvent.description" @input="updateEventDescription"></el-input>
            </el-form-item>
            <el-form-item label="Qualifiable Criteria">
                <criteria-control></criteria-control>
            </el-form-item>
            <el-form-item label="Team Size Limit">
                <TeamSizeControl :size="currentEvent.limits"></TeamSizeControl>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import TeamSizeControl from './TeamSizeControl'
import TeamList from './TeamList'
import CriteriaControl from './CriteriaControl'
import { mapActions, mapGetters } from 'vuex'

export default {
	computed: {
        ...mapGetters(['currentEvent'])
    },
    methods: {
        ...mapActions(['updateEventName', 'updateEventDescription'])
    },
	components:{
		TeamSizeControl, TeamList, CriteriaControl
	}
}

</script>

<style>
    .fab {
        border: 1px solid #eaeefb;
        border-radius: 4px;
        transition: 0.2s
    }

    .label{
        text-align: left;
    }

    .page{
        padding:0%
    }
</style>
