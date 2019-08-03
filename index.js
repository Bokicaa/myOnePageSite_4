$(document).ready(function() {
    var time = 500;
    var time1 = 200;
    var top1 = $(window).scrollTop();
    var bottom = top1 + $(window).height();



    $('.showing-h1').each(function() {
        if($(this).offset().top < bottom) {
            var $this = $(this);
            setTimeout(function() {
                $this.animate({opacity:1}, 500);
            }, 200);
        }
    });
    
    function animation(elem, tm, tm1) {
            var $this = elem;
            setTimeout(function() {
            $this.animate({opacity:1, marginLeft:'0px'}, tm);
            var $next = $this.next();
            var time = tm * 2;
                animation($next, tm, tm1);
        }, tm1);
    
    }

    function difWidth() {
        if($(window).width() < 768) {
            $('.area').find('.showing').filter(':not(:animated)').each(function() {
    
                if($(this).offset().top < bottom && $(this).offset().top > top1) {
                    var $this = $(this);
                    setTimeout(function() {
                        $this.animate({opacity:1, marginLeft:'0px'}, time);
                    }, time1);
                }
            });
        } else {
            $('.area').find('.showing').each(function() {
    
              if($(this).offset().top < bottom && $(this).prev().length == '0' && $(this).offset().top > top1) {
                    var $this = $(this);
                    animation($this, time, time1);    
                    }
                });
    
        } 
    }
    
    difWidth();

function active_item() {
    var top = $(window).scrollTop() + 150;
    var first_area = $('.area:first').offset().top; 
    $('.area').each(function() {
        if($(this).offset().top < top) {
            let $id = $(this).attr('id').substr(-1, 1);
            $('.right-container').find('#' + $id).addClass('active').siblings('.section').removeClass('active');
        }
        else if(first_area > top) {
            $('.right-container .section').removeClass('active');
        }
    });
}
  
    active_item();


    $(window).scroll(function() {
        
        active_item();

            top1 = $(window).scrollTop();
            bottom = top1 + $(window).height();

        $('.showing-h1').each(function() {
            if($(this).offset().top < bottom && $(this).offset().top > top1) {
                var $this = $(this);
                setTimeout(function() {
                    $this.animate({opacity:1}, 500);
                }, 200);
            }
        });

        
        difWidth();
    
    });


    $('.right-container .section').click(function() {
        var $id = $(this).attr('id');
        var $off = $('#section-' + $id).offset().top -145;
        $('html, body').animate({ scrollTop: $off }, 500);
    });

    $('.cube').click(function() {
        var $off = $(this).parent('.vertical').next().offset().top - 145;
        $('html, body').animate({ scrollTop: $off }, 500);
    });



    $(window).on('load', function() {
        $('.preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
      });

});