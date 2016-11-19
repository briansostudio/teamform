<template>
	<div class="basic-user-status">
      <span>Username: {{user.name}}</span>
      <span class="teamNameText">Current Team: {{ user.status === 'NO_TEAM' ? '-' : team.name}}</span>
      <span> ({{statusString}})</span>
	  <!--<span>Current Team: {{teamName}}</span>-->
      <div>
        <router-link :to="{ name: 'user', params: { eventId: $route.params.eventId, userId: user.id }}" class="userPageBtn">
          <i class="user icon" aria-hidden="true"></i>
        </router-link>
        <a class="signOutBtn" href="#" v-on:click.prevent="signOut">
          <i class="sign out icon" aria-hidden="true"></i>
        </a>
      </div>
    </div>
</template>

<script>
export default{
	props:["user",'team'],
  computed:{
	  statusString(){
	    switch(this.user.status){
        case 'NO_TEAM': return 'No Team';
        case 'IN_TEAM': return 'Member';
        case 'LEADER': return 'Leader';
      }
    }
  },
  methods:{
    signOut(){

    }
  }
}
</script>

<style>
  .basic-user-status{
    position: fixed;
    display:flex;
    align-items: center;
    top: 0;
    z-index: 1;
    height: 50px;
    background: #00e0af;
    padding: 10px;
	  width:70%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 2px 5px rgba(0,0,0,.4);
    border-radius: 2px;
    text-align: left;
  }

  .teamNameText
  {
    left:20%;
  }

  .basic-user-status span {
    padding: 10px;
    color: #fff;
    top: 1px;
    vertical-align:middle;
  }

  .userPageBtn
  {
    position: absolute;
    display: block;
    color: #fff;
    right: 60px;
    top: 15px;
    font-size: 25px;
    cursor: pointer;
    transition: color .2s;
  }
  .signOutBtn
  {
    position: absolute;
    display: block;
    color: #fff;
    right: 20px;
    top: 15px;
    font-size: 25px;
    cursor: pointer;
    transition: color .2s;
  }
  .basic-user-status a:focus, .basic-user-status a:hover {
    color: #41b883;
  }
</style>
