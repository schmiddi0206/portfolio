import $ from "jquery";
import ScrollSpy from "./scrollSpy";

/**
 *
 */
class Skillbar {

    /**
     * @param {jQuery|HTMLELement|string} element
     */
    constructor (element)
    {
        this.$element = $(element);
        /**
         *
         * @type {jQuery}
         * @private
         */
        this.$skillBar = this.$element.find('.bar');

        /**
         *
         * @type {Number}
         * @private
         */
        this.max = parseInt(this.$element.attr('data-percent'), 10);

        /**
         * variable which shows if skillbar has been triggered
         * @type {boolean}
         * @private
         */
        this.hasTriggered = false;
    }

    /**
     *
     */
    animate () {
        if (screen.availWidth >= 786)
        {
            this.$skillBar.css("width", `calc(${this.max}% - ${1.5 * this.max}px)`);
        }
        else
        {
            this.$skillBar.css("width", `calc(${this.max}% - ${0.5 * this.max}px)`);
        }

        this.hasTriggered = true;
    }

    /**
     * Initialize component
     */
    init () {
        const scrollSpy = new ScrollSpy();

        if(scrollSpy.isInView(this.$element))
        {
            this.animate();
        }

        $(document).scroll(() => {
            if(scrollSpy.isInView(this.$element))
            {
                this.animate();
            }
        });

        $(window).on("resize", () => {
            if (this.hasTriggered)
            {
                this.animate();
            }
        });
    }
}

export default Skillbar;
