<template>
    <div class="TeamOverviewEdit">
        <!--<div class="ui form">
            <div class="inline fields">
                <label>Team Name</label>
                <input type="text" :placeholder="viewingTeam.name">
            </div>
              <div class="field">
                <label>Text</label>
                <textarea></textarea>
            </div>

        </div>-->
        <el-form ref="form" style="margin: 60px 60px 60px 60px;width=800px;">
            <el-form-item label="Team Name">
                <el-input :value="viewingTeam.name" @change="nameChange" @blur="name !== 0 ? updateTeamName(name) : ''"></el-input>
            </el-form-item>
            
            <el-form-item label="Team Description">
                <el-input type="textarea" :value="viewingTeam.description" @change="descriptionChange" @blur="description !== 0 ? updateTeamDescription(description) : ''"></el-input>
            </el-form-item>

            <div>
                <span style="color: #5e6d82;">Tags</span>
                <tags-control style="margin-top:10px;"></tags-control>
            </div>
            
        </el-form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TagsControl from './TagsControl'
    export default {
        data(){
            return {
                name: 0,
                description: 0
            }
        },
        computed: {
            ...mapGetters(['viewingTeam'])
        },
        methods: {
            ...mapActions(['updateTeamName', 'updateTeamDescription']),
            nameChange(val){
                this.name = val;
            },
            descriptionChange(val){
                this.description = val;
            },
        },
        props: {},
        components: {TagsControl}
    }
</script>

<style>
    .TeamOverviewEdit {
        border: 1px solid #eaeefb;
        border-radius: 4px;
        transition: 0.2s
    }
</style>
