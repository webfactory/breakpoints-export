const bp = {
    /**
     * Returns the state of a breakpoint in relation to the current viewport. The breakpoints are managed in
     * CSS Custom Properties of the same name that are in turn updated via CSS Media Queries.
     *
     * @param {string} name - Name of the breakpoint
     * @returns {boolean} – State of the breakpoint for the current viewport
     */
    isBreakpointActive(name) {
        const state = getComputedStyle(document.documentElement)
            .getPropertyValue(`--${name}`)
            .trim();

        return state === 'active';
    },

    lessThan(breakpoint) {
        return !this.isBreakpointActive(breakpoint);
    },

    greaterThan(breakpoint) {
        return this.isBreakpointActive(breakpoint);
    },
}

export default bp;
