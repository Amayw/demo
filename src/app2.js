import $ from "jquery";
import "./app2.css";
const $li = $("#app2>.tabbar");
const $content = $("#app2>.contentbar");
const $tab = $("#app2>.tabbar");
$li.on("click", "li", (e) => {
  const $index = $(e.currentTarget).index();
  console.log($content.children());
  $content
    .children()
    .eq($index)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $tab
    .children()
    .eq($index)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});
