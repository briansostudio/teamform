<template>
    <div>
        <div>
            <label class="label">Qualities Wanted</label>
            <br>
            <div class="ui action input">
                <input type="text" v-model="qualityInput" >
                <button class="ui teal right labeled icon button" @click.prevent="addWantedQuality">
                    <i class="add icon"></i>
                    Add
                </button>
            </div>
        </div>
        <br>
        <div>
            <div class="ui tag labels">
                <a v-for="q in qualities" class="ui label">{{ q }} <i class="delete icon" @click="removeQuality(q)"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            qualityInput: '',
            qualities: []
        }
    },
    methods: {
        addWantedQuality(){
            this.qualities.push(this.qualityInput)
            this.qualityInput = ''
        },
        removeQuality(name){
            let index = this.qualities.indexOf(name)
            this.qualities.splice(index, 1)
        }
    }
}
</script>