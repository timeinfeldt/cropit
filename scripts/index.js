(function() {
  var a, b, c, d, e, f, g;
  g = function() {
      return this.cropit("rotateCW")
    }, f = function() {
      return this.cropit("rotateCCW")
    }, e = function() {
      return this.find("input.cropit-image-input").click()
    }, a = function() {
      var a;
      return a = this.cropit("export"), window.open(a)
    }, d = function() {
      return this.find(".slider-wrapper").removeClass("disabled")
    }, c = function() {
      return this.find(".slider-wrapper").addClass("disabled")
    }, b = function(a, b, c) {
      return 1 === a.code ? (this.find(".error-msg").text("Please use an image that's at least " + this.outerWidth() + "px in width and " + this.outerHeight() + "px in height."), this.addClass("has-error"), window.setTimeout(function(a) {
        return function() {
          return a.removeClass("has-error")
        }
      }(this), 3e3)) : void 0
    },
    function() {
      var h;
      return h = $(".splash"), h.cropit({
        imageBackground: !0,
        smallImage: "allow",
        imageState: {
          src: "https://timeinfeldt.github.io/cropit/images/0-1920.jpg"
        },
        onZoomEnabled: d.bind(h),
        onZoomDisabled: c.bind(h),
        onImageError: b.bind(h.find(".cropit-preview"))
      }), h.on("click", ".rotate-cw-btn", g.bind(h)), h.on("click", ".rotate-ccw-btn", f.bind(h)), h.on("click", ".select-image-btn", e.bind(h)), h.on("click", ".js-download-btn", a.bind(h))
    }()
}).call(this);
