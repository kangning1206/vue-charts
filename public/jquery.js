(function() {
  const jQuery = function(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init(selector, context);
  };

  jQuery.prototype = {
    // constructor: jQuery,
    each:function(){

    }
  }

  jQuery.fn = jQuery.prototype;

  jQuery.fn.init = function(){

  }



  // jQuery.fn.init.prototype = jQuery.fn;


  // 导出 jQuery 和$ 到全局

  if (typeof window === 'object' && typeof window.document === 'object') {
    window.jQuery = jQuery;
    window.$ = jQuery;
  }

  // end
}());

$('div');

// $(document).ready(() => {
//   debugger
//   // 在这里写你的代码...
// });
