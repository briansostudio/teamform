<template>
	<div>
    <h2>Members:</h2>
    <div>
      <MemberCard v-for="(member, index) in team.members" :member="member" key="member.id"></MemberCard>
    </div>
  </div>
</template>

<script>
  import MemberCard from './MemberCard.vue'
export default {
	props: ['team'],
  components:{MemberCard}
}
</script>

<style scoped>
	.event-page {
		margin-top: 10%;
	}
	.add-team-input{
		width: 100%;
	}
</style>
