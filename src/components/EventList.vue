<template>
  <div class="ui centered grid">
    <div class="column">
      <table class="ui definition table">
        <thead>
          <tr>
            <th class="center aligned">#</th>
            <th class="center aligned">Event</th>
            <th class="center aligned">No. of Teams</th>
            <th class="center aligned">Event Page</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in events">
            <td> {{index + 1}}</td>
            <td>{{event.name}}</td>
            <td class="center aligned">
              {{event.teamNum}}
            </td>
            <td class="center aligned">
              <button class="ui labeled icon button">
                <i class="add user icon"></i>
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ['events']
}
</script>

<style>
  .ui.labeled.icon.button:hover {
    box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);
  }
</style>