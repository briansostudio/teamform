<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">Please authenticate using your admininstrative password</span>
            </div>
            <el-form>
                <el-form-item label="Authentication Password">
                    <el-input v-model="password" type="password"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            password: ''
        }
    },
    watch: {
        password(val){
            this.$store.dispatch('updatePasswordEntered', val)
        }
    }
}
</script>