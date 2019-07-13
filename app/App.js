import $ from "jquery";
import { AppViewModel } from "./App.vm";
import template from "./App.stache";

(() => {
    const vm = new AppViewModel();

    $("#root").html(template(vm));
})();
