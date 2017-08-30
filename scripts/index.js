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
        imageState: {
          src: "https://timeinfeldt.github.io/cropit/images/0-1920.jpg"
        },
        onZoomEnabled: d.bind(h),
        onZoomDisabled: c.bind(h),
        onImageError: b.bind(h.find(".cropit-preview"))
      }), h.on("click", ".rotate-cw-btn", g.bind(h)), h.on("click", ".rotate-ccw-btn", f.bind(h)), h.on("click", ".select-image-btn", e.bind(h)), h.on("click", ".download-btn", a.bind(h))
    }(),
    function() {
      var e;
      return e = $(".demo-wrapper.basic"), e.cropit({
        imageState: {
          src: "https://timeinfeldt.github.io/cropit/images/1-960.jpg",
          offset: {
            x: 0,
            y: -25
          }
        },
        onZoomEnabled: d.bind(e),
        onZoomDisabled: c.bind(e),
        onImageError: b.bind(e.find(".cropit-preview"))
      }), e.on("click", ".download-btn", a.bind(e))
    }(),
    function() {
      var h;
      return h = $(".demo-wrapper.custom-button"), h.cropit({
        imageState: {
          src: "https://timeinfeldt.github.io/cropit/images/2-960.jpg",
          offset: {
            x: 0,
            y: -94
          }
        },
        onZoomEnabled: d.bind(h),
        onZoomDisabled: c.bind(h),
        onImageError: b.bind(h.find(".cropit-preview"))
      }), h.on("click", ".rotate-cw-btn", g.bind(h)), h.on("click", ".rotate-ccw-btn", f.bind(h)), h.on("click", ".select-image-btn", e.bind(h)), h.on("click", ".download-btn", a.bind(h))
    }(),
    function() {
      var h;
      return h = $(".demo-wrapper.image-background"), h.cropit({
        imageBackground: !0,
        imageState: {
          src: "https://timeinfeldt.github.io/cropit/images/3-960.jpg",
          offset: {
            x: 0,
            y: -86
          }
        },
        onZoomEnabled: d.bind(h),
        onZoomDisabled: c.bind(h),
        onImageError: b.bind(h.find(".cropit-preview"))
      }), h.on("click", ".rotate-cw-btn", g.bind(h)), h.on("click", ".rotate-ccw-btn", f.bind(h)), h.on("click", ".select-image-btn", e.bind(h)), h.on("click", ".download-btn", a.bind(h))
    }(),
    function() {
      var h;
      return h = $(".demo-wrapper.image-background-border"), h.cropit({
        imageBackground: !0,
        imageBackgroundBorderWidth: 15,
        imageState: {
          src: "https://timeinfeldt.github.io/cropit/images/4-960.jpg",
          offset: {
            x: 0,
            y: -154
          }
        },
        onZoomEnabled: d.bind(h),
        onZoomDisabled: c.bind(h),
        onImageError: b.bind(h.find(".cropit-preview"))
      }), h.on("click", ".rotate-cw-btn", g.bind(h)), h.on("click", ".rotate-ccw-btn", f.bind(h)), h.on("click", ".select-image-btn", e.bind(h)), h.on("click", ".download-btn", a.bind(h))
    }()
}).call(this);
