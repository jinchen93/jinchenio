import Vue from "./vue.min.js";
require("../scss/index.scss");

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    el: ".page-wrapper",
    data: {
      page: "ABOUT",
    },
    methods: {
      about() {
        return this.page === "ABOUT";
      },
      work() {
        return this.page === "WORK";
      },
      handleClick(type) {
        this.page = type;
      },
    },
  });
});
