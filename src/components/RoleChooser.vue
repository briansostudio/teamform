<template>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="9">
            <el-card :body-style="{ padding: '0px' }" @click.native="selectRoleForLogin('organizer')">
                <img :src="assets.organizerIcon" class="image" style="width: 180px; height:auto">
                <div style="padding: 14px;">
                    <el-radio class="radio" v-model="displayCurrentRoleSelection" label="organizer">Event Organizer</el-radio>
                </div>
            </el-card>
        </el-col>
        <el-col :span="9">
            <el-card :body-style="{ padding: '0px' }" @click.native="selectRoleForLogin('participants')">
                <img :src="assets.userIcon" class="image" style="width: 180px; height:auto">
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
            assets: {
				userIcon: 'https://firebasestorage.googleapis.com/v0/b/teamform-14254.appspot.com/o/users.png?alt=media&token=90b2fa01-630a-4c6a-a172-4ba566822a34',
				organizerIcon: 'https://firebasestorage.googleapis.com/v0/b/teamform-14254.appspot.com/o/organizer.png?alt=media&token=e4df00d1-cc26-4aa1-b846-6d8bd6aececb'	
			}
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