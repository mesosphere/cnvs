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
    $.app.stage = $("#stage");
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
    Simulate placeholder text
    --------------------------------------------------------------------------- */

    //simulate_placeholders();

    /* ---------------------------------------------------------------------------
    Google Code Pretty Print
    --------------------------------------------------------------------------- */

    window.prettyPrint && prettyPrint();

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

    // $('.page-header').stick_in_parent({
    //   parent: $('.page')
    // });
    //$('.page-navigation-sticky').stick_in_parent();
    $(".custom-scrollbar").mCustomScrollbar({
      theme: 'dark',
      scrollInertia: 0,
      autoHideScrollbar: true
    });

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

    var scroll_top = $(window).scrollTop() - $('.canvas').offset().top;
    console.log("window_scroll()");

  }

  window.window_scroll = window_scroll;



  /* ---------------------------------------------------------------------------
  Page Content Navigation Update
  --------------------------------------------------------------------------- */

  /* function page_content_navigation_update() {

    var scroll_top = $(window).scrollTop() - $('.canvas').offset().top;
    var page_content_navigation = $('#page-content-navigation');

    page_content_navigation.find('li').each(function() {

      $(this).children('a').each(function() {

        var el = $($(this).attr('href'));

        if (el != null) {

          var el_top = el.offset().top;
          var el_height = el.height();

          if ((scroll_top >= (el_top - 1)) && (scroll_top < (el_top + el_height))) {

            $(this).parent().addClass('active');

          } else {

            $(this).parent().removeClass('active');

          }


        }

      })

    });

  } */



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

});
