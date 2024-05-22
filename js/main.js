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
  methods: {
    deleteItem(index) {
      this.todoList.splice(index, 1);
    },
    createNewToDo() {
      if (this.newToDo.trim() !== "") {
        this.todoList.push({ text: this.newToDo.trim(), done: false });
        this.newToDo = "";
      }
    },
    setDate() {
      let today = new Date();
      let day = today.getDate();
      let month = this.monthNames[today.getMonth()];
      let year = today.getFullYear();
      return `${day} ${month} ${year}`;
    },
    setDay() {
      let today = new Date();
      let day = this.weekdaysName[today.getDay()];
      return day;
    },
  },
}).mount("#app");
