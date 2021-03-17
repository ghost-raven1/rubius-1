if (process.client) {
  window.$ = require("jquery");
  window.jQuery = require("jquery");
  window.fancybox = require("@fancyapps/fancybox");

  window.$.fancybox.defaults.closeExisting = false;
  window.$.fancybox.defaults.loop = true;
  window.$.fancybox.defaults.preventCaptionOverlap = false;
  window.$.fancybox.defaults.keyboard = true;
  window.$.fancybox.defaults.buttons = ["thumbs", "close"];

  window.jQuery(document).ready(function() {
    const jQuery = window.jQuery;
    const selectors = [
      'a[href$=".jpg"]',
      'a[href$=".jpeg"]',
      'a[href$=".png"]',
      'a[href$=".gif"]',
    ];
    jQuery().fancybox({
      selector: selectors.join(":not([data-fancybox]),"),
      caption(instance, item) {
        return (
          jQuery(this)
            .find("figcaption")
            .html() || jQuery(this).attr("title")
        );
      },
    });

    jQuery('a[href*="youtube.com/watch?v"]').fancybox();
    jQuery('a[href*="vimeo.com/"]').fancybox();
  });
}
