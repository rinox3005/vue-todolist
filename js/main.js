"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [],
      newToDo: "",
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      weekdaysName: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  computed: {
    currentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = this.monthNames[today.getMonth()];
      const year = today.getFullYear();
      return `${day} ${month} ${year}`;
    },
    currentDay() {
      const today = new Date();
      return this.weekdaysName[today.getDay()];
    },
  },
  methods: {
    deleteItem(index) {
      this.todoList.splice(index, 1);
    },
    createNewToDo() {
      const trimmedToDo = this.newToDo.trim();
      if (trimmedToDo) {
        this.todoList.push({ text: trimmedToDo, done: false });
        this.newToDo = "";
      }
    },
  },
}).mount("#app");
