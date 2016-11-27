<template>
    <div>
        <el-dialog title="Create Event" v-model="dialogVisible" size="large">
        <span>To create an event, please enter administrative password for future use</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click.native="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click.native="dialogVisible = false">Confirm</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
export default {

}
</script>