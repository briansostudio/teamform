<template>
  <div></div>
</template>

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
            left:   'prev,next today',
            center: 'title',
            right:  'month,agendaWeek,agendaDay'
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
        events: self.events,
        eventSources: self.eventSources,
        defaultDate: this.defaultDate,

        eventRender(event, element) {
          if (this.sync) {
            self.events = cal.fullCalendar('clientEvents')
          }
        },

        eventDestroy(event) {
          if (this.sync) {
            self.events = cal.fullCalendar('clientEvents')
          }
        },

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
          $(this.$el).fullCalendar('rerenderEvents')
        },
      }
    },

    events: {
      'remove-event'(event) {
        $(this.$el).fullCalendar('removeEvents', event._id)
      },
      'rerender-events'(event) {
        $(this.$el).fullCalendar('rerenderEvents')
      },
      'refetch-events'(event) {
        $(this.$el).fullCalendar('refetchEvents')
      },
      'render-event'(event) {
        $(this.$el).fullCalendar('renderEvent', event)
      },
      'reload-events'() {
        $(this.$el).fullCalendar('removeEvents')
        $(this.$el).fullCalendar('addEventSource', this.events)
      },
      'rebuild-sources'() {
        $(this.$el).fullCalendar('removeEvents')
        this.eventSources.map(event => {
          $(this.$el).fullCalendar('addEventSource', event)
        })
      },
    },
  }
</script>
