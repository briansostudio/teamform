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
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="ui grid">
                    <div class="column">
                        <TeamSizeControl type="min" :size="event.size.min"></TeamSizeControl>
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

    .ui.teal.button {
        box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);
    }

    .ui.teal.button:hover {  
        box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);
    }
</style>
