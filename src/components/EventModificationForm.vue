<template>
    <div class="page">
    <div class="ui piled segment">
        <form class="ui form">
			<h3 class="ui dividing header">Event Details Modification</h3>
            <div class="field">
                <label class="label">Event Name</label>
                <input name="Event name" placeholder="Comp3511" type="text">
            </div>
            <div class="field">
                <label class="label">Event Description</label>
                <textarea placeholder="Desriptions..."></textarea>
            </div>

            <div class="field">
                <quality-control></quality-control>
            </div>

            <div class="field">
                <div class="ui grid">
                    <div class="column">
                        <TeamSizeControl type="max" :size="event.size.max"></TeamSizeControl>
                        <div class="ui buttons">
                            <button class="ui button" @click="event.size.max-=1"><i class="minus icon"></i></button>
                            <button class="ui button" @click="event.size.max+=1"><i class="plus icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="ui grid">
                    <div class="column">
                        <TeamSizeControl type="min" :size="event.size.min"></TeamSizeControl>
                        <div class="ui buttons">
                            <button class="ui button" @click="event.size.min-=1"><i class="minus icon"></i></button>
                            <button class="ui button" @click="event.size.min+=1"><i class="plus icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="ui teal button" type="submit">Save</button>
        </form>
	</div>
    </div>
</template>

<script>
import TeamSizeControl from './TeamSizeControl'
import TeamList from './TeamList'
import QualityControl from './QualityControl'

export default {
	data(){
		return {
			event: {
				name: '',
				size: {
					max: 10,
					min: 1
				}
			},
			teamName: ''
		}
	},
	components:{
		TeamSizeControl, TeamList, QualityControl
	}
}

</script>

<style>

    .label{
        text-align: left;
    }

    .page{
        padding:0%
    }
</style>