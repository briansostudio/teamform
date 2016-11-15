<template>
	<div class="basic-user-status">
      <span>Username: {{username}}</span>
      <span class="teamNameText">Current Team: {{teamName}}</span>
	  <!--<span>Current Team: {{teamName}}</span>-->
      <div>
        <a class="userPageBtn" href="#" v-on:click.prevent="userPage">
          <i class="user icon" aria-hidden="true"></i>
          </a>
          <a class="signOutBtn" href="#" v-on:click.prevent="signOut">
          <i class="sign out icon" aria-hidden="true"></i>
          </a>
        </a>
      </div>
    </div>
</template>

<script>
export default{
	data () {
      return {
        username: 'Tom',
        teamName: 'COMP3511'
      }
	},
}
</script>

<style>
  .basic-user-status{
    position: fixed;
    display:flex;
    align-items: center;
    left: 25%;
    top: 0;
    right: 25%;
    z-index: 1;
    height: 50px;
    background: #00e0af;
    padding: 10px;
	  width:50%;
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
