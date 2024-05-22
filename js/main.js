"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        {
          text: "Buy a new shirt",
          done: false,
        },
        {
          text: "Buy pet food",
          done: false,
        },
        {
          text: "Buy oranges",
          done: false,
        },
        {
          text: "Call John",
          done: false,
        },
      ],
    };
  },
  methods: {},
}).mount("#app");
