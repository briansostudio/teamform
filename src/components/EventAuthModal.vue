<template>
    <el-dialog title="Enter selected event page" :value="presented" @input="toggleLoginModal" size="small">
        <el-steps :space="200" :active="currentLoginStep" >
            <el-step title="Step One" description="Choose Your Identity"></el-step>
            <el-step title="Step Two" description="Authenticate"></el-step>
            <el-step title="Step Three" description="Join / View Your Team(s)"></el-step>
        </el-steps>
        <br>
        <admin-auth v-if="currentLoginStep == 2 && displayCurrentRoleSelection == 'organizer'"></admin-auth>
        <auth v-if="currentLoginStep == 2 && displayCurrentRoleSelection == 'participants'"></auth>
        <role-chooser v-if="currentLoginStep == 1"></role-chooser>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click.native="proceedClick">Proceed <i class="fa fa-chevron-circle-right"></i></el-button>
        <el-button @click="toggleLoginModal(false)">Close</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RoleChooser from './RoleChooser'
import Auth from './Auth'
import AdminAuth from './AdminAuth'

export default {
    computed: {
        ...mapGetters(['currentLoginStep', 'displayCurrentRoleSelection', 'adminEnteredPassword'])
    },
    methods: {
        ...mapActions(['toggleLoginModal', 'stepIncrement']),
        proceedClick(){
            if(this.currentLoginStep !== 2){
                this.$store.dispatch("stepIncrement");
            }else{
                if(this.displayCurrentRoleSelection == 'organizer'){
                    this.$store.dispatch("adminLogin", this.adminEnteredPassword)
                }else{
                    this.$store.dispatch("loginOrRegister");
                }
            }   
        }
    },
    components:{
        RoleChooser, Auth, AdminAuth
    },
    props: ['presented']
}
</script>