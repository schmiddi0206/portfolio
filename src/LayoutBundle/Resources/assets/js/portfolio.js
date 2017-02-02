import $ from "jquery";
import Hamburger from "./portfolio/hamburger";

$(".hamburger").each((index, element) =>
{
    const hamburger = new Hamburger(element);
    hamburger.init();
});
