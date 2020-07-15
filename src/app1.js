import $ from "jquery";
import "./app1.css";
const $span = $(".output>span");
const $btn1 = $(".add");
const n = localStorage.getItem("n");
$span.text(n);
$btn1.on("click", () => {
  let n = parseInt($span.text());
  n += 1;
  localStorage.setItem("n", n);
  $span.text(n);
});
const $btn2 = $(".sub");
$btn2.on("click", () => {
  let n = parseInt($span.text());
  n -= 1;
  localStorage.setItem("n", n);
  $span.text(n);
});
const $btn3 = $(".mul");
$btn3.on("click", () => {
  let n = parseInt($span.text());
  n *= 2;
  localStorage.setItem("n", n);
  $span.text(n);
});
const $btn4 = $(".divide");
$btn4.on("click", () => {
  let n = parseInt($span.text());
  n /= 2;
  localStorage.setItem("n", n);
  $span.text(n);
});
