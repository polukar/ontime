<template>
  <div class="page">
    <mobileHeader title="Записи"></mobileHeader>
    <div class="calendar-picker">
      <v-row justify="center">
        <v-date-picker
          v-model="picker"
          first-day-of-week="1"
          locale="ru-ru"
          no-title="true"
        ></v-date-picker>
      </v-row>
    </div>
    <div class="page-wrap d-flex">
      <vNav></vNav>
      <div class="content">
        <header class="page__header d-flex justify-space-between align-center">
          <div class="page__header-start d-flex align-center">
            <h1 class="h1-title">Записи</h1>
            <div class="calendar__tabs d-flex">
              <nuxt-link to="/"
                ><div class="calendar__tab">Неделя</div></nuxt-link
              >
              <nuxt-link to="/days"
                ><div class="calendar__tab">День</div></nuxt-link
              >
              <nuxt-link to="/list"
                ><div class="calendar__tab">Список</div></nuxt-link
              >
            </div>
          </div>
          <v-btn fab class="btn-add" @click="openPanel">
            <v-icon light> mdi-plus </v-icon>
          </v-btn>
        </header>
        <div class="innerpage innerpage-calendar">
          <v-row class="fill-height">
            <v-col>
              <v-sheet class="calendar">
                <v-calendar
                  ref="calendar"
                  v-model="value"
                  color="primary"
                  type="4day"
                  first-day-of-week="1"
                  locale="ru-ru"
                  :events="events"
                  :event-color="getEventColor"
                  :event-ripple="false"
                  @change="getEvents"
                  @mousedown:event="startDrag"
                  @mousedown:time="startTime"
                  @mousemove:time="mouseMove"
                  @mouseup:time="endDrag"
                  @mouseleave.native="cancelDrag"
                >
                  <template v-slot:event="{ event, timed, eventSummary }">
                    <div
                      class="v-event-draggable"
                      v-html="eventSummary()"
                    ></div>
                    <div
                      v-if="timed"
                      class="v-event-drag-bottom"
                      @mousedown.stop="extendBottom(event)"
                    ></div>
                  </template>
                </v-calendar>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vNav from "~/components/nav/nav";
export default {
  components: {
    vNav,
  },
  data: () => ({
    value: "",
    events: [],
    colors: ["#EEEEEE"],
    names: ["Маша Т."],
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,
    picker: new Date().toISOString().substr(0, 10),
  }),
  methods: {
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;

        this.dragTime = mouse - start;
      } else {
        this.createStart = this.roundTime(mouse);
        this.createEvent = {
          name: `Event #${this.events.length}`,
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart,
          timed: true,
        };

        this.events.push(this.createEvent);
      }
    },
    extendBottom(event) {
      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime !== null) {
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = this.roundTime(newStartTime);
        const newEnd = newStart + duration;

        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false);
        const min = Math.min(mouseRounded, this.createStart);
        const max = Math.max(mouseRounded, this.createStart);

        this.createEvent.start = min;
        this.createEvent.end = max;
      }
    },
    endDrag() {
      this.dragTime = null;
      this.dragEvent = null;
      this.createEvent = null;
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }

      this.createEvent = null;
      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 15; // minutes
      const roundDownTime = roundTo * 60 * 1000;

      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
    },
    toTime(tms) {
      return new Date(
        tms.year,
        tms.month - 1,
        tms.day,
        tms.hour,
        tms.minute
      ).getTime();
    },
    getEventColor(event) {
      const rgb = parseInt(event.color.substring(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;

      return event === this.dragEvent
        ? `rgba(${r}, ${g}, ${b}, 0.7)`
        : event === this.createEvent
        ? `rgba(${r}, ${g}, ${b}, 0.7)`
        : event.color;
    },
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`).getTime();
      const max = new Date(`${end.date}T23:59:59`).getTime();
      const days = (max - min) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const timed = this.rnd(0, 3) !== 0;
        const firstTimestamp = this.rnd(min, max);
        const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000;
        const start = firstTimestamp - (firstTimestamp % 900000);
        const end = start + secondTimestamp;

        events.push({
          name: this.rndElement(this.names),
          color: this.rndElement(this.colors),
          start,
          end,
          timed,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)];
    },
  },
};
</script>
