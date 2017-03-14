import $ from "jquery";
import Description from "./portfolio/description";
import Fullscreen from "./portfolio/fullscreen";
import Hamburger from "./portfolio/hamburger";
import Skillbar from "./portfolio/skillbar";

$(".plusminus, .fullscreen").each((index, element) =>
{
    const description = new Description(element);
    description.init();
});

$(".fullscreen").each((index, element) =>
{
    const fullscreen = new Fullscreen(element);
    fullscreen.init();
});

$(".hamburger").each((index, element) =>
{
    const hamburger = new Hamburger(element);
    hamburger.init();
});

$(() => {
    $('.skill-bar').each((index, element) =>
    {
        const skillbar = new Skillbar(element);
        skillbar.init();
    });
});
