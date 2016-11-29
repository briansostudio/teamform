<template>
    <div class="page">

    <div class="fab">
        <el-form ref="form" label-width="180px" style="margin: 60px 60px 60px 60px;">
            <el-form-item label="Event Title">
                <el-input :value="currentEvent.name" @change="nameChange" @blur="name !== 0 ? updateEventName(name) : ''"></el-input>
            </el-form-item>
            <el-form-item label="Event Description">
                <el-input type="textarea" :value="currentEvent.description" @change="descriptionChange" @blur="description !== 0 ? updateEventDescription(description) : ''"></el-input>
            </el-form-item>
            <el-form-item label="Qualifiable Criteria">
                <criteria-control></criteria-control>
            </el-form-item>
            <el-form-item label="Team Size Limit">
                <TeamSizeControl :size="currentEvent.limits"></TeamSizeControl>
            </el-form-item>
            <el-form-item label="Grouping Deadline">
                <el-date-picker v-model="deadlineDate" type="date" placeholder="Pick a day">
                </el-date-picker>
                <el-time-picker v-model="deadlineTime" placeholder="Pick an hour">
                </el-time-picker>
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
    data(){
        return {
            name:0,
            description:0,
            deadlineDate: '2016-11-22',
            deadlineTime: new Date(2016, 9, 10, 18, 40)
        }
    },
	computed: {
        ...mapGetters(['currentEvent'])
    },
    methods: {
        nameChange(val){
            this.name = val;
        },
        descriptionChange(val){
          this.description = val;
        },
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
