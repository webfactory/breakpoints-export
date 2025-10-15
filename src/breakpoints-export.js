/**
 * Returns the value of a breakpoint managed in a CSS Custom Property of the same name.
 *
 * @param {string} name - Name of the breakpoint
 * @param {boolean} asNumber - Controls whether the return value is a string with unit (px, em) or a number without unit
 * @returns {number|string} - Value of the CSS breakpoint
 */
const bp = {
    getBreakpoint(name, asNumber = true) {
        const threshold = getComputedStyle(document.documentElement)
            .getPropertyValue(`--${name}`)
            .trim();

        return asNumber ? parseInt(threshold) : threshold;
    },

    lessThan(breakpoint) {
        let threshold = this.getBreakpoint(breakpoint);

        if (!threshold) {
            return false
        } else {
            return window.innerWidth < threshold;
        }
    },

    greaterThan(breakpoint) {
        let threshold = this.getBreakpoint(breakpoint);

        if (!threshold) {
            return false
        } else {
            return window.innerWidth >= threshold;
        }
    },
}

export default bp;
