<template>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="9">
            <el-card :body-style="{ padding: '0px' }" @click.native="selectRoleForLogin('organizer')">
                <img src="../assets/images/organizer.png" class="image" style="width: 180px; height:auto">
                <div style="padding: 14px;">
                    <el-radio class="radio" v-model="displayCurrentRoleSelection" label="organizer">Event Organizer</el-radio>
                </div>
            </el-card>
        </el-col>
        <el-col :span="9">
            <el-card :body-style="{ padding: '0px' }" @click.native="selectRoleForLogin('participants')">
                <img src="../assets/images/users.png" class="image" style="width: 180px; height:auto">
                <div style="padding: 14px;">
                    <el-radio class="radio" v-model="displayCurrentRoleSelection" label="participants">Event Participants</el-radio>
                </div>
            </el-card>
        </el-col>
	</el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
        return {
        }
    },
    computed: {
        ...mapGetters(['displayCurrentRoleSelection'])
    },
    methods:{
        ...mapActions(['selectRoleForLogin'])
    }
}
</script>

<style scoped>
.el-card {
        cursor: pointer;
    }
</style>