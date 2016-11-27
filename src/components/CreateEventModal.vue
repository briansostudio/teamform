<template>
    <div>
        <el-dialog title="Create Event" v-model="open" size="medium">
        <h3>Event Title: {{eventTitle}}</h3>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">To create an event, please enter administrative password for future use</span>
            </div>
            <el-form>
                <el-form-item label="Authentication Password">
                    <el-input v-model="password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="Confirm Password">
                    <el-input v-model="confirm_password" type="password"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
        <span slot="footer" class="dialog-footer">
            <el-button >Cancel</el-button>
            <el-button type="primary" @click.prevent="createEvent({name: eventTitle, adminPassword: password})">Confirm</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return {
            password: '',
            confirm_password: '',
        }
    },
    methods: {
        ...mapActions(['createEvent'])
    },
    props: ['open', 'eventTitle']
}
</script>