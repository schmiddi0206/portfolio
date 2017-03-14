import $ from "jquery";

class ScrollSpy {
    /**
     * checks whether an element is in view or not
     *
     * @param {jQuery|HTMLELement|string} element
     * @returns {boolean}
     */
    isInView (element)
    {
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();
        const elemTop = $(element).offset().top;
        const elemBottom = elemTop + $(element).height();

        return (elemBottom <= docViewBottom) && (elemTop >= docViewTop);
    }
}

export default ScrollSpy;
