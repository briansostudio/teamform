<template>
  <div></div>
</template>
<style>
  .fc .fc-toolbar{
    display:none;
  }
  .fc table{
    background:#ddd;
  }
  .fc th, .fc td{
    border-width: 0 !important;
  }
  .fc table th.fc-widget-header{
    color: #666;
    background:#ddd;
  }
  .fc table td.fc-widget-content{
    color:#777;
    background:#eee;
  }
  th.fc-day-header.fc-widget-header{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .fc .fc-event{
    background:#1abc9c;
    border: 1px solid #1abc9c;
  }
</style>
<script>
  require('fullcalendar/dist/fullcalendar.css');
  require('fullcalendar');
  import $ from 'jquery';

  export default {
    props: {
      events: {
        default() {
          return []
        },
      },

      eventSources: {
        default() {
          return []
        },
      },

      editable: {
        default() {
          return true
        },
      },

      selectable: {
        default() {
          return true
        },
      },

      selectHelper: {
        default() {
          return true
        },
      },

      header: {
        default() {
          return {
            left:   '',
            center: '',
            right:  ''
          }
        },
      },

      defaultView: {
        default() {
          return 'agendaWeek'
        },
      },

      sync: {
        default() {
          return false
        }
      },

      defaultDate:{
        default(){
          return undefined;
        }
      },

      callback: {
        default() {
          return function(){

          }
        }
      }
    },

    mounted() {
      const cal = $(this.$el),
        self = this;

      $(this.$el).fullCalendar({
        header: this.header,
        defaultView: this.defaultView,
        editable: this.editable,
        selectable: this.selectable,
        selectHelper: this.selectHelper,
        aspectRatio: 2,
        timeFormat: 'HH:mm',
        axisFormat: 'HH:mm',
        slotLabelFormat: 'HH:mm',
        events: self.events,
        eventSources: self.eventSources,
        defaultDate: this.defaultDate,
        columnFormat: 'dd',
        allDaySlot: false,

        eventClick(event) {
          self.callback('event-selected', event)
        },

        eventDrop(event) {
          self.callback('event-drop', event)
        },

        eventResize(event) {
          self.callback('event-resize', event)
        },

        select(start, end, jsEvent) {
          self.callback('event-created', {
            start,
            end,
            allDay: !start.hasTime() && !end.hasTime(),
          })
        },
      })
    },

    watch: {
      events: {
        deep: true,
        handler(val) {
          $(this.$el).fullCalendar('removeEvents');
          $(this.$el).fullCalendar('addEventSource', this.events);
        },
      }
    },

//    events: {
//      'remove-event'(event) {
//        $(this.$el).fullCalendar('removeEvents', event._id)
//      },
//      'rerender-events'(event) {
//        $(this.$el).fullCalendar('rerenderEvents')
//      },
//      'refetch-events'(event) {
//        $(this.$el).fullCalendar('refetchEvents')
//      },
//      'render-event'(event) {
//        $(this.$el).fullCalendar('renderEvent', event)
//      },
//      'reload-events'() {
//        $(this.$el).fullCalendar('removeEvents')
//        $(this.$el).fullCalendar('addEventSource', this.events)
//      },
//      'rebuild-sources'() {
//        $(this.$el).fullCalendar('removeEvents')
//        this.eventSources.map(event => {
//          $(this.$el).fullCalendar('addEventSource', event)
//        })
//      },
//    },
  }
</script>
