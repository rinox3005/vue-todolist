"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [],
      newToDo: "",
      hidden: true,
      searchInput: "",
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
        this.todoList.push({ text: trimmedToDo, done: false, visible: true });
        this.newToDo = "";
      }
    },
    searchBar() {
      if (this.hidden) {
        this.hidden = false;
      } else {
        this.hidden = true;
        this.searchInput = "";
      }
    },
    searchToDo() {
      this.todoList.forEach((toDo) => {
        toDo.visible = true;
      });
      if (this.searchInput.toLowerCase()) {
        this.todoList.forEach((toDo) => {
          if (
            !toDo.text.toLowerCase().includes(this.searchInput.toLowerCase())
          ) {
            toDo.visible = false;
          }
        });
      }
    },
  },
}).mount("#app");
