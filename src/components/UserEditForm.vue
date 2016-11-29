<template>
    <el-dialog title="Edit User Info" v-model="show" size="small" :close-on-click-modal="false" :show-close="false">
        <el-form ref="form" label-width="180px" style="padding: 60px 60px 60px 0px">
            <el-form-item label="Display Name">
                <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="Describe Yourself">
                <el-input type="textarea" v-model="description"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="updateInfo">Save</el-button>
            <el-button @click="toggleEditMode">Cancel</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            show: this.present,
            name: this.user.name,
            description: this.user.description
        }
    },
    watch: {
        user(val){
            this.name = val.name
            this.description = val.description
        },
        present(val){
            this.show = val
        }
    },
    computed: {
        ...mapGetters(['isViewingCurrentUser']),
    },
    methods: {
        ...mapActions(['toggleEditMode']),
        updateInfo(){
            this.$store.dispatch('updateUserDisplayName', {name: this.name})
            this.$store.dispatch('updateUserDescription', {description: this.description})
        }
    },
    props: {
        user:{default:()=>{name:"loading"}}, present: { default:() => false}
    },
    components: {}
}
</script>

