<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">Please authenticate using your admininstrative password</span>
            </div>
            <el-form>
                <el-form-item label="Authentication Password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-button type="primary" @click.native="adminLogin(form.password)">Login</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return {
            form: {
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['adminLogin'])
    }
}
</script>