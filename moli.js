(function(_) {
    function k2x() {}
    k2x.prototype.init = function(options) {
        const opts = Object.assign({}, options)
        this.opts = { 
            ...opts,
            ok() {}
        }
    }
})(window)