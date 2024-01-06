   
    (function($) {
        $.fn.timeline = function() {
          var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
          };
          selectors.item.eq(0).addClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          var itemLength = selectors.item.length;
          $(window).scroll(function() {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function(i) {
              min = $(this).offset().top;
              max = $(this).height() + $(this).offset().top;
              var that = $(this);
              if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                selectors.item.removeClass(selectors.activeClass);
                selectors.id.css(
                  "background-image",
                  "url(" +
                    selectors.item
                      .last()
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.last().addClass(selectors.activeClass);
              } else if (pos <= max - 40 && pos >= min) {
                selectors.id.css(
                  "background-image",
                  "url(" +
                    $(this)
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.removeClass(selectors.activeClass);
                $(this).addClass(selectors.activeClass);
              }
            });
          });
        };
      })(jQuery);
      
      $("#timeline-1").timeline();



      // 

      
//From Hotel HUb

const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

