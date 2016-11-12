<template>
    <div class="abc">
    <div class="ui piled segment">
        <form class="ui form">
			<h3 class="ui dividing header">Event Detais Modifiaction</h3>
            <div class="field">
                <label class="label">Event Name</label>
                <input name="Event name" placeholder="Comp3511" type="text">
            </div>
            <div class="field">
                <label class="label">Event Desription</label>
                <textarea placeholder="Desriptions..."></textarea>
            </div>

            <div class="field">
                <label class="label">Skill Radar Labels</label>
                <div class="ui action input">
                    <input placeholder="labe1, labe2..." type="text">
                    <select class="ui compact selection dropdown">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option selected="" value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>

            <div class="field">
                <div class="ui grid">
                    <div class="column">
                        <TeamSizeControl type="max" :size="event.size.max" @valueChanged="updateEvent"></TeamSizeControl>
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
                        <TeamSizeControl type="min" :size="event.size.min" v-on:valueChanged="updateEvent"></TeamSizeControl>
                        <div class="ui buttons">
                            <button class="ui button" @click="event.size.min-=1"><i class="minus icon"></i></button>
                            <button class="ui button" @click="event.size.min+=1"><i class="plus icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="ui teal button" type="submit">Modify</button>
        </form>
	</div>
    </div>
</template>

<script>
import TeamSizeControl from './TeamSizeControl'
import TeamList from './TeamList'

export default {
created: function(){
		this.fetchEvent()
		},
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
	methods:{
		fetchEvent: function(){
			let _this = this
			let ref = this.$root.$firebaseRefs.root
			ref.on('value', (snapshot) => {
				_this.event = snapshot.child(_this.$route.params.id).val()
			})
		},
		updateEvent: function(){
			let update = {}
			let ref = this.$root.$firebaseRefs.root
			update[this.$route.params.id] = this.event
			ref.update(update)
		}
	},
	components:{
		TeamSizeControl, TeamList
	}
}

</script>

<style>

    .label{
        text-align: left;
    }

    .abc{
        
    }

</style>