import $ from "jquery";

/**
 *
 */
class Description
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

        this.$button
            .on("click", (event) => this.toggleDescription());
    }

    /**
     * @private
     */
    toggleDescription ()
    {
        $('.plusminus').toggleClass('is-active');
        $('.description').toggleClass('description-visible');
        $('figure').toggleClass('description-visible');
    }
}

export default Description;
