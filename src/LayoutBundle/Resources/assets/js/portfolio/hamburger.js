import $ from "jquery";

/**
 *
 */
class Hamburger
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
            .on("click", (event) => this.toggleNavigation(event));
    }

    /**
     * @private
     * @param {jQuery.event} event
     */
    toggleNavigation (event)
    {
        $(event.currentTarget).toggleClass('is-active');
        $(event.currentTarget).parent().find(".navigation-items")
            .toggleClass('is-active');
    }
}

export default Hamburger;
