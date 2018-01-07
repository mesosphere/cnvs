$(function() {

  /* ---------------------------------------------------------------------------
  DOM Event Listeners
  --------------------------------------------------------------------------- */

  $(document).ready(function() {

  });

  $(window).load(function() {

    init();

  });



  /* ---------------------------------------------------------------------------
  Initialize
  --------------------------------------------------------------------------- */

  function init() {

    /* ---------------------------------------------------------------------------
    Define Namespace
    --------------------------------------------------------------------------- */

    $.app = {};
    $.app.scrollbar_width = get_scrollbar_width();

    /* ---------------------------------------------------------------------------
    Define window resize event listener
    --------------------------------------------------------------------------- */

    $(window).resize(function () {

      window_resize();

    });

    window_resize();



    /* ---------------------------------------------------------------------------
    Define window scroll event listener
    --------------------------------------------------------------------------- */

    $(window).scroll(function () {

      window_scroll();

    });

    window_scroll();

    /* ---------------------------------------------------------------------------
    Initialize tooltip
    --------------------------------------------------------------------------- */

    $('[data-toggle="tooltip"]').each(function() {
      var placement = 'top';

      switch($(this).data('placement')) {
        case 'right':
          placement = 'right';
          break;
        case 'bottom':
          placement = 'bottom';
          break;
        case 'left':
          placement = 'left';
          break;
        case 'top':
        default:
          placement = 'top';
          break;
      }

      new Tooltip($(this), {
        placement: placement,
        template: '<div class="tooltip tooltip-' + placement + '" role="tooltip"><div class="tooltip-inner"></div></div>'
      });
    });

    /* ---------------------------------------------------------------------------
    Form Control Group Focus Event
    --------------------------------------------------------------------------- */

    $('.form-control-group input').focus(function() {

      $(this).parent().addClass('focus');

    }).blur(function() {

      $(this).parent().removeClass('focus');

    });

    /* ---------------------------------------------------------------------------
    Sticky Sidebar Page Navigation
    --------------------------------------------------------------------------- */

    $(".custom-scrollbar").mCustomScrollbar({
      theme: 'dark',
      scrollInertia: 0,
      autoHideScrollbar: true
    });

    /* ---------------------------------------------------------------------------
    Initialize Modals
    --------------------------------------------------------------------------- */

    modals_init();

    /* ---------------------------------------------------------------------------
    Initialize Views
    --------------------------------------------------------------------------- */

    views_init();

  }



  /* ---------------------------------------------------------------------------
  Initialize Views
  --------------------------------------------------------------------------- */

  function views_init() {

  }



  /* ---------------------------------------------------------------------------
  Event Handler: Window Resize
  --------------------------------------------------------------------------- */

  function window_resize() {

    var responsive_viewport = $(window).width() + $.app.scrollbar_width;

    window_scroll();

  }

  window.window_resize = window_resize;



  /* ---------------------------------------------------------------------------
  Event Handler: Window Scroll
  --------------------------------------------------------------------------- */

  function window_scroll() {

    var scroll_top = $(window).scrollTop() - $('.app').offset().top;
    console.log("window_scroll()");

  }

  window.window_scroll = window_scroll;



  /* ---------------------------------------------------------------------------
  Simulate Placeholder
  --------------------------------------------------------------------------- */

  function simulate_placeholders() {

    var input = document.createElement("input");

    if(('placeholder' in input) == false) {

      $('[placeholder]').focus(function() {

        var i = $(this);

        if(i.val() == i.attr('placeholder')) {

          i.val('').removeClass('placeholder');

          if(i.hasClass('password')) {

            i.removeClass('password');
            this.type='password';

          }

        }

      }).blur(function() {

        var i = $(this);

        if(i.val() == '' || i.val() == i.attr('placeholder')) {

          if(this.type=='password') {

            i.addClass('password');
            this.type='text';

          }

          i.addClass('placeholder').val(i.attr('placeholder'));

        }

      }).blur().parents('form').submit(function() {

        $(this).find('[placeholder]').each(function() {

          var i = $(this);

          if(i.val() == i.attr('placeholder')) {

            i.val('');

          }

        })

      });

    }

  }

  window.simulate_placeholders = simulate_placeholders;



  /* ---------------------------------------------------------------------------
  Get Browser Dimensions
  --------------------------------------------------------------------------- */

  function get_browser_dimensions() {

    var dimensions = {

      width: 0,
      height: 0

    };

    if ($(window)) {

      dimensions.width = $(window).width();
      dimensions.height = $(window).height();

    }

    return dimensions;

  }

  window.get_browser_dimensions = get_browser_dimensions;



  /* ---------------------------------------------------------------------------
  Get Scrollbar Width
  --------------------------------------------------------------------------- */

  function get_scrollbar_width() {

      var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div></div>');
      $('body').append(div);
      var w1 = $('div', div).innerWidth();
      div.css('overflow-y', 'auto');
      var w2 = $('div', div).innerWidth();
      $(div).remove();
      return (w1 - w2);

  }

  window.get_scrollbar_width = get_scrollbar_width;

  /* ---------------------------------------------------------------------------
  Get Transition Time
  --------------------------------------------------------------------------- */

  function getTransitionDuration (el, with_delay) {

    var duration = el.css('transition-duration');
    var delay = el.css('transition-delay');

    duration = (duration.indexOf("ms")>-1) ? parseFloat(duration) : parseFloat(duration)*1000;
    delay = (delay.indexOf("ms")>-1) ? parseFloat(delay) : parseFloat(delay)*1000;

    if (with_delay) {

      return (duration + delay);

    } else {

      return duration;

    }

  }

  /* ---------------------------------------------------------------------------
  Initialize Modals
  --------------------------------------------------------------------------- */

  function modals_init() {

    // Listen for and handle click events on Modal Triggers

    $('*[data-toggle="modal"]').each(function() {

      $(this).click(function(event) {

        event.preventDefault();
        var modal = $($(this).data('target'));

        if (modal.length) {

          var modal_backdrop = $('.modal-backdrop');

          if (!modal_backdrop.length) {

            modal_backdrop = $('<div class="modal-backdrop fade" style="display: block;"></div>');
            modal_backdrop.appendTo($('body'));

          }

          setTimeout(function() {

            modal.css({'display': 'flex'});
            modal_backdrop.css({'display': 'block'});

            setTimeout(function() {

              modal.addClass("in");
              modal_backdrop.addClass("in");

              modal_backdrop.click(function(event) {

                event.preventDefault();
                modal_close_helper(modal);

              });

            }, 20);

          }, 20);

        }

      });

    });

    // Initialize event handlers for modal close buttons

    $('.modal:not(.modal-inline)').each(function() {

      var modal = $(this);
      modal.css({'display': 'none'});

      modal.find('[data-dismiss="modal"]').each(function() {

        $(this).click(function(event) {

          event.preventDefault();
          modal_close_helper(modal);

        });

      });

    });

  }

  /* ---------------------------------------------------------------------------
  Modal Close Helper
  --------------------------------------------------------------------------- */

  function modal_close_helper(modal) {

    var transition_duration = getTransitionDuration(modal, true);
    modal.removeClass("in");

    var modal_backdrop = $('.modal-backdrop');

    if (modal_backdrop.length) {

      modal_backdrop.removeClass("in");

    }

    setTimeout(function() {

      modal.css({'display': 'none'});

      if (modal_backdrop.length) {

        modal_backdrop.css({'display': 'none'});

      }

    }, transition_duration);

  }

});
