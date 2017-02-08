import $ from "jquery";

/**
 *
 */
class Fullscreen
{
    /**
     *
     * @param {string|HTMLElement|jQuery} opener
     */
    constructor (opener)
    {
        /**
         * @private
         * @type {jQuery}
         */
        this.$button = $(opener);
    }

    /**
     *
     */
    init ()
    {
        if (!this.$button)
        {
            return;
        }

        if (this.$button.is('.fa-expand'))
        {
            this.$button
                .on("click", () => this.enterFullScreen(document.documentElement));
        }
        else if (this.$button.is('.fa-compress'))
        {
            this.$button
                .on("click", () => this.exitFullScreen());
        }

    }

    /**
     * @private
     * @param {jQuery.event} element
     */
    enterFullScreen (element)
    {
        $('.fullscreen').toggleClass('is-active');

        if(element.requestFullscreen)
        {
            element.requestFullscreen();
        }
        else if(element.mozRequestFullScreen)
        {
            element.mozRequestFullScreen();
        }
        else if(element.webkitRequestFullscreen)
        {
            element.webkitRequestFullscreen();
        }
        else if(element.msRequestFullscreen)
        {
            element.msRequestFullscreen();
        }
    }

    /**
     * @private
     */
    exitFullScreen ()
    {
        $('.fullscreen').toggleClass('is-active');

        if(document.exitFullscreen)
        {
            document.exitFullscreen();
        }
        else if(document.mozCancelFullScreen)
        {
            document.mozCancelFullScreen();
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen();
        }
    }
}

export default Fullscreen;
