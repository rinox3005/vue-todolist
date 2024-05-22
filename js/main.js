"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        {
          text: "Buy a new shirt",
          done: true,
        },
      ],
    };
  },
}).mount("#app");
