<template>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="9">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="assets.organizerIcon" class="image" style="width: 180px; height:auto">
                <div style="padding: 14px;">
                    <el-radio class="radio" v-model="role" label="0">Event Organizer</el-radio>
                </div>
            </el-card>
        </el-col>
        <el-col :span="9">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="assets.userIcon" class="image" style="width: 180px; height:auto">
                <div style="padding: 14px;">
                    <el-radio class="radio" v-model="role" label="1">Event Participants</el-radio>
                </div>
            </el-card>
        </el-col>
	</el-row>
</template>

<script>
export default {
    data(){
        return {
            assets: {
				userIcon: 'https://firebasestorage.googleapis.com/v0/b/teamform-14254.appspot.com/o/users.png?alt=media&token=90b2fa01-630a-4c6a-a172-4ba566822a34',
				organizerIcon: 'https://firebasestorage.googleapis.com/v0/b/teamform-14254.appspot.com/o/organizer.png?alt=media&token=e4df00d1-cc26-4aa1-b846-6d8bd6aececb'	
			},
            role: '1'
        }
    },
}
</script>