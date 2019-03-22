(function (blink) {
  'use strict';

  var AbpDevStyle = function () {
    blink.theme.styles.aprendizaje_basado_en_proyectos.apply(this, arguments);
  }

  AbpDevStyle.prototype = {
    parent: blink.theme.styles.aprendizaje_basado_en_proyectos.prototype,
    bodyClassName: 'content_type_clase_abp_dev',
    ckEditorStyles: {
      name: 'abp-dev',
      styles: [
           { name: 'Título principal', element: 'h2', attributes: { 'class': 'bck-title1'} },
           { name: 'Título principal 2', element: 'h3', attributes: { 'class': 'bck-title2'} },
           { name: 'Título 1', element: 'h3', attributes: { 'class': 'bck-title3'} },
           { name: 'Título 2', element: 'h3', attributes: { 'class': 'bck-title4'} },
           { name: 'Título 3', element: 'h3', attributes: { 'class': 'bck-title5'} },

           { name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },

           { name: 'Caja simple', type: 'widget', widget: 'blink_box', attributes: { 'class': 'caja-central' } },
           { name: 'Diálogo verde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-verde' } },
	   { name: 'Diálogo celeste', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-celeste' } },
	   { name: 'Diálogo rojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-rojo' } },
           { name: 'Diálogo amarillo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-amarillo' } },
	   { name: 'Diálogo verde izq', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-verde-izq' } },
	   { name: 'Diálogo celeste izq', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-celeste-izq' } },
	   { name: 'Diálogo rojo izq', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-rojo-izq' } },
           { name: 'Diálogo amarillo izq', type: 'widget', widget: 'blink_box', attributes: { 'class': 'dialogo-amarillo-izq' } }
      ]
    },
    init: function() {
      this.parent.init.call(this.parent, this);

      //this.activityInitialized = true;
      //this.fetchData();

      //this.preventTouchCarousel();
    },
    removeFinalSlide: function () {
      this.parent.removeFinalSlide.call(this.parent, this, true);
    },
    /*preventTouchCarousel: function () {
      $('#swipeview-slider')
        .on('touchstart', function (event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          return;
        });
    },*/

   /**
     * Cierra el iframe de una actividad flipped.
     */
    /*closeIframe: function() {
      if (parent) {
        parent.cerrarIframe();
        //parent.$('#abp-modal-close-chapter').modal('hide');
        //parent.$('body').removeClass('abp-iframe-visible');
      }
    },*/

    /**
     * Carga de datos del libro en un actividad
     */
    /*fetchData: function() {
      blink.getCourse(idcurso).done((function(data) {
        this.onCourseDataLoaded(data);
      }).bind(this));
    },*/

    /**
    * Realiza operaciones al cargar los datos del curso.
    * @param  {Object} data Información del curso.
    */
    /*onCourseDataLoaded: function(data) {
      abpApp.config.bookcover = abpApp.getCover(data);
      var isBookCover = idclase.toString() === abpApp.config.bookcover.id;

      if (isBookCover) {
        this.loadUserData();
        $('html').addClass('abp-isBookCover');
        var updateHash = false;
        abpApp.loadHomepage(data, updateHash);
      } else {
        $('html').removeClass('abp-isBookCover');
        abpApp.loadSliders(data);
      }

    },*/

    /*loadUserData: function() {
      var urlSeguimiento = '/include/javascript/seguimientoCurso.js.php?idcurso=' + idcurso;
      loadScript(urlSeguimiento, true, (function(data) {
        window.actividades = actividades;
      }).bind(this));
    },*/

    /**
     * Realiza operaciones al cargar los datos de la actividad.
     * @param  {Object} data Información de la actividad.
     */
    /*onActivityDataLoaded: function(data) {
      console.log("onActivityDataLoaded");

    },
    onCourseLoaded: function(data) {
      console.log(data);
    }*/
  };


  AbpDevStyle.prototype = _.extend({}, new blink.theme.styles.aprendizaje_basado_en_proyectos(), AbpDevStyle.prototype);

  blink.theme.styles['abp-dev'] = AbpDevStyle;

  blink.events.on('digitalbook:bpdfloaded', function () {
    // Ejemplo carga de datos del curso desde un libro digital.
    blink.getCourse(idcurso).done(function (data) {
      var style = new AbpDevStyle;
      style.onCourseDataLoaded(data);
    });
  });

  // Remove Info
  blink.events.on('indexLoaded', function(){
    console.log("Index loaded");
    abpApp.removeAuxFromBookIndex();
  });

})( blink );




// ████░██▄░▄██░████░████░████▄░██▄░██░░▄███▄░░██░░
// ██▄░░░▀███▀░░░██░░██▄░░██░██░███▄██░██▀░▀██░██░░
// ██▀░░░▄███▄░░░██░░██▀░░████▀░██▀███░███████░██░░
// ████░██▀░▀██░░██░░████░██░██░██░░██░██░░░██░████

//----------------------------------//
//                                  //
//  Vendors                         //
//                                  //
//----------------------------------//

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});


/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),h.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?f(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function d(){var e=n.body;return e||(e=l(w?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var i,s,a,f,u="modernizr",p=l("div"),c=d();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=l("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!s}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),m("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,o,i){function f(){p&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var p,c,d,m,y,g=["modernizr","tspan","samp"];!P.style&&g.length;)p=!0,P.modElem=l(g.shift()),P.style=P.modElem.style;for(d=e.length,c=0;d>c;c++)if(m=e[c],y=P.style[m],a(m,"-")&&(m=s(m)),P.style[m]!==t){if(i||r(o,"undefined"))return f(),"pfx"==n?m:!0;try{P.style[m]=o}catch(h){}if(P.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function g(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?y(a,n,o,i):(a=(e+" "+j.join(s+" ")+s).split(" "),u(a,n,t))}var h=[],C=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",b=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};S.atRule=E;var j=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=j;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style}),S.testAllProps=g;var N=S.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?g(e,n,t):g(e,"pfx"))};Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(h),delete S.addTest,delete S.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);



//----------------------------------//
//                                  //
//  Config                          //
//                                  //
//----------------------------------//

var abpApp = window.abpApp || {};
abpApp.config = {};
abpApp.config.isDEV = (ENTORNO === 'DEV');

abpApp.config.firstTime = true;
abpApp.config.carouselOpt = {
  arrows: true,
  dots: false,
  infinite: false,
  slidesToShow: 4.25,
  slidesToScroll: 4,
  variableWidth: true,
  accessibility: false,
  responsive: [
   {
     breakpoint: 979,
     settings: {
       slidesToShow: 3.25,
       slidesToScroll: 3
     }
   },
   {
     breakpoint: 629,
     settings: {
       slidesToShow: 2.25,
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 469,
     settings: {
       slidesToShow: 1.25,
       slidesToScroll: 1
     }
   }
 ]
};
abpApp.config.isStudent = false;
abpApp.config.statusLock1 = 8;
abpApp.config.statusLock2 = 2;
abpApp.config.buttonGoHome = '.abp-js-gohome';
abpApp.config.auxTab = 'tab';
abpApp.config.coverName = 'Portada';
abpApp.config.bookcover = '';
abpApp.config.auxUnitName = 'Info';

abpApp.config.unitsIDs = [];
abpApp.config.bodyClasses = ['abp-body-home', 'abp-body-unit'];

abpApp.config.tree = {
  0 : {
    'id' : 'home',
    'hash' : 'home',
    'class' : abpApp.config.bodyClasses[0]
  },
  1 : {
    'id' : 'unit',
    'hash' : 'unit_',
    'class' : abpApp.config.bodyClasses[1],
    'suffix' : ['_studentarea', '_teacherarea']
  }
}

abpApp.unitAlreayLoaded = false;

abpApp.bookData = '';

abpApp.text = {
  goback : 'Volver',
  studentarea : 'Sesión del alumno',
  teacherarea : 'Área del profesor',
  noresources : 'No hay recursos disponibles',
  pages : 'pág',
  lockcontent : 'Contenido bloqueado por el profesor',
  nointernet : 'Necesitas conexión para realizar esta acción'
}

//----------------------------------//
//                                  //
//  Utils                           //
//                                  //
//----------------------------------//

// Object fit support
abpApp.objectFitSupport = function() {

  if ( ! Modernizr.objectfit ) {
    $('.abp-unit-content-background').each(function () {
      var $container = $(this),
          imgUrl = $container.find('img').prop('src');
      if (imgUrl && !$container.hasClass('compat-object-fit')) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('compat-object-fit');
      }
    });
  }
}

// DEV Console
abpApp.console = function(logValue) {
  if (abpApp.config.isDEV) {
    console.log(logValue);
  }
}

// Remove unused class
abpApp.removeUnusedClass = function(currentClass) {

  var possibleClasses = abpApp.config.bodyClasses.slice(0),
      index = possibleClasses.indexOf(currentClass);

  possibleClasses.splice(index, 1);

  var $body = $('body');
  $.each(possibleClasses, function(i, v){
    $body.removeClass(v);
  });

}


// Get General background
abpApp.getCover = function(data) {
  var cover =  data.units[0].subunits[0];
  $.each(data.units, function(i, unit) {
    $.each(unit.subunits, function(ind, subunit) {
      if (subunit.title === abpApp.config.coverName) {
        cover = data.units[i].subunits[ind];
      }
    });
  });
  return cover;
}

// Get Auxiliary Unit abpApp.config.auxUnitName
abpApp.getAuxUnit = function(data) {
  var auxUnit =  0;
  $.each(data.units, function(i, unit) {
    if (unit.title === abpApp.config.auxUnitName) {
      auxUnit = i;
    }
  });
  return auxUnit;
}

// Go Homepage

abpApp.gohome = function() {
  var hash = abpApp.config.tree[0].hash;
  abpApp.updateHashWithListener(hash);
}

// Toggle Lock/Unlock unit

abpApp.toggleLockSubunit = function(subunitID, isLocked) {

  blink.checkConnection(
    function() {
      onCursoCambiarBloqueado(subunitID, idcurso);

      var $items = $('.abp-resources-list-item-inner[data-subunit-id="'+subunitID+'"] .abp-js--lockActivity'),
          newIsLocked = !isLocked;

      if (newIsLocked) {
        $items.removeClass('abp-unlock');
      } else {
        $items.addClass('abp-unlock');
      }
    },
    function() {
      _showAlert(abpApp.text.nointernet);
    }
  );

}

abpApp.removeAuxFromBookIndex = function() {

  var auxUnit = abpApp.getAuxUnit(abpApp.bookData),
      auxUnitID = abpApp.bookData.units[auxUnit].id;

  var $auxLi = $('#book-index').find('li[data-id="'+auxUnitID+'"]');

  if ($auxLi.length) {
    $auxLi.remove();
    setTimeout(function() {
      var $auxIndex = $('#book-index').find('.unit-content[data-id="'+auxUnitID+'"]');
      $auxIndex.remove();

      //$('#book-index').find('.col-main').css({'left' : 0});
    }, 50);
  }

}

abpApp.currentSectionInBookIndex = function(currentID) {

  $('#book-index')
    .find('li[data-id="'+currentID+'"] a')
      .click();

}

abpApp.openActivity = function(url, subunitID, type) {

    if (blink.isApp) {
      blink.rest.openUrl('fullscreen', url);
    } else {
      var openBlank = (type === 'url' || type === 'archivo');
      if (openBlank) {
        blink.rest.openUrl('fullscreen', url);
      } else {
        blink.goToActivity(idcurso, subunitID);
      }
    }
}


abpApp.stopMultimediaContent = function() {
  var multimediaContent = $('.video-js');
  if (multimediaContent.length) {
    multimediaContent.each(function(i,e) {
      var multimediaContentID = $(e).attr('id');
      videojs.players[multimediaContentID].pause();
      $(e).find(".vjs-close").click();
    });
  }
}

//----------------------------------//
//                                  //
//  Hash navigation                 //
//                                  //
//----------------------------------//


// Get Parameter By Hash
abpApp.getParameterByHash = function(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[#&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get ID by hash
abpApp.getIDByHash = function(hash) {
  var unitID = hash.replace(abpApp.config.tree[1].hash, '');
  $.each(abpApp.config.tree[1].suffix, function(i, suffix){
    unitID = unitID.replace(suffix, '');
  });

  return unitID;
}


// Hash distributor
var hashDistributorTimeout;
abpApp.hashDistributor = function(currentHash,data,updateHash) {

  clearTimeout(hashDistributorTimeout);

  var timeToWait = 500;
  if (currentHash === abpApp.config.tree[0].hash) { //Home
    hashDistributorTimeout = setTimeout(function() {abpApp.loadHomepage(data,updateHash)}, timeToWait);
  } else if (currentHash.startsWith(abpApp.config.tree[1].hash)) { // Unit and ID

    // This works different because we need an ID to load the Unit
    var abpunit = abpApp.getIDByHash(currentHash),
        unitExists = (abpApp.config.unitsIDs.indexOf(abpunit) >= 0),
        activeAreaTeacher = currentHash.includes(abpApp.config.tree[1].suffix[1]);

    if (abpunit !== '' && abpunit !== null && unitExists) {
      var currentUnit = abpunit;

      hashDistributorTimeout = setTimeout(function() {abpApp.loadUnit(data,currentUnit,activeAreaTeacher,updateHash)}, timeToWait);

    } else {

      abpApp.console("Not Unit ID given, redirecting to Units");
      var hash = abpApp.config.tree[0].hash;
      abpApp.updateHashWithListener(hash);
    }

  } else { // Incorrect hash

    abpApp.console("Incorrect hash, redirecting to Home");

    if (currentHash !== '') {
      var hash = '';
      abpApp.updateHashWithListener(hash);
      var updateHash = true;
    } else {
      var updateHash = false;
      $(abpApp.config.buttonGoHome).addClass('disabled');
    }
    hashDistributorTimeout = setTimeout(function() {abpApp.loadHomepage(data,updateHash)}, timeToWait);

  }

}

abpApp.loadByHash = function(currentHash,data) {

  abpApp.console('Load by hash');

  var currentHash = currentHash.replace('#',''),
      updateHash = false;

  abpApp.hashDistributor(currentHash, data, updateHash);
}

abpApp.onChangeHash = function() {

  abpApp.console('Hash changed');

  var currentHash = window.location.hash.replace('#',''),
      data = abpApp.bookData,
      updateHash = false;

  $(abpApp.config.buttonGoHome).removeClass('disabled');

  abpApp.hashDistributor(currentHash, data, updateHash);
  abpApp.stopMultimediaContent();

}


abpApp.updateHashWithListener = function(hash) {

  window.location.hash = hash;

  abpApp.onChangeHash();
}


//----------------------------------//
//                                  //
//  Templates                       //
//                                  //
//----------------------------------//


abpApp.loadSliders = function(data) {

  // Get BookData
  abpApp.bookData = data

  // Put Background to slider
  var backgroundImageSrc = abpApp.config.bookcover.image,
      backgroundImage = (backgroundImageSrc !== '' && typeof backgroundImageSrc !== 'undefined') ? 'url('+backgroundImageSrc+')' : 'none';
  $('#slider').css('background-image', backgroundImage);
}

abpApp.loadHomepage = function(data,updateHash) {

  abpApp.console('Loading Homepage');
  abpApp.unitAlreayLoaded = false;

  var currentIndex = 0;
  var currentPage = abpApp.config.tree[currentIndex].id,
      bodyClass = abpApp.config.tree[currentIndex].class,
      hash = abpApp.config.tree[currentIndex].hash,
      currentHash = window.location.hash;
      currentHash = currentHash.replace('#','');

  var bookTitle = data.title,
      bookDescription = data.description;

  $('.navbar .libro-left .title').text(bookTitle);

  if (abpApp.config.firstTime) {

    abpApp.config.isStudent = blink.user.esAlumno();
    abpApp.bookData = data;

    var backgroundImageSrc = abpApp.config.bookcover.image,
        backgroundImage = (backgroundImageSrc !== '' && typeof backgroundImageSrc !== 'undefined') ? 'background-image: url('+backgroundImageSrc+');' : '';

    $.each(data.units, function(i, unit){
      var unitNumber = unit.number - 1,
          unitNumberStr = unitNumber.toString();
      abpApp.config.unitsIDs.push(unitNumberStr);
    });

    var comp_navigationSecondary = '<nav class="abp-navigation abp-navigation_secondary"><ul></ul></nav>',
        comp_slider = '<div class="abp-units-slider abp-js--slider"></div>';
    var sectionHomeHeaderHTML = '<header class="abp-section-header"><div class="abp-container"><div class="abp-section-header-inner"><h1 class="abp-title-1">'+bookTitle+'</h1><div class="abp-intro"><p>'+bookDescription+'</p></div></div></div>'+comp_navigationSecondary+'</header>',
        sectionHomeContentHTML = '<div class="abp-section-content abp-slider--toleft"><div class="abp-container">'+comp_slider+'</div></div>',
        sectionHomeHTML = '<div class="abp-page abp-page_home" style="'+backgroundImage+'"><section class="abp-section abp-section_home">'+sectionHomeHeaderHTML+sectionHomeContentHTML+'</section></div>';

    var comp_tabs_student = '<li class="abp-tab"> <a href="#abp-studentarea">'+abpApp.text.studentarea+'</a> </li>',
        comp_tabs_teacher = comp_tabs_student+'<li class="abp-tab"> <a href="#abp-teacherarea">'+abpApp.text.teacherarea+'</a> </li>',
        comp_tabs = (abpApp.config.isStudent) ? comp_tabs_student : comp_tabs_teacher,
        comp_tabs_wrapper_student = '<div class="abp-tabs-content" id="abp-studentarea"> <div class="abp-resources-list-wrapper"><ul class="abp-resources-list"></ul></div> </div>',
        comp_tabs_wrapper_teacher = comp_tabs_wrapper_student+ '<div class="abp-tabs-content" id="abp-teacherarea"><div class="abp-resources-list-wrapper"><ul class="abp-resources-list abp-resources-list_2"></ul></div></div>',
        comp_tabs_wrapper = (abpApp.config.isStudent) ? comp_tabs_wrapper_student : comp_tabs_wrapper_teacher;

    var sectionUnitHeader = '<header class="abp-section-header"><div class="abp-section-header-top"> <h1 class="abp-title-2" id="abp-unit-title"></h1></div><div class="abp-section-header-bottom"> <div class="abp-section-header-bottom-description"> <h2 class="abp-title-3" id="abp-unit-description"></h2> </div> <div class="abp-section-header-bottom-number abp-unit-number abp-unit-number_large"><div class="abp-unit-number-inner"><span id="abp-unit-number"></span></div> </div> <div class="abp-section-header-bottom-background" id="abp-unit-image"></div></div></header>',
        sectionUnitContent = '<div class="abp-section-content"><div class="abp-tabs-wrapper"><ul class="abp-tabs">'+comp_tabs+'</ul><div class="abp-tabs-content-wrapper">'+comp_tabs_wrapper+'</div> </div> </div>',
        sectionUnitHTML = '<div class="abp-page abp-page_unit" style="'+backgroundImage+'"><div class="abp-gohome"><div class="abp-container abp-container_3"> <a href="#" class="abp-js-gohome link link_back"><span>'+abpApp.text.goback+'</span></a></div></div><section class="abp-section abp-section_unit"><div class="abp-container abp-container_2"><div class="abp-section_unit-inner">'+sectionUnitHeader+sectionUnitContent+'</div></div></section></div>'

    var totalSectionsHTML = sectionHomeHTML+sectionUnitHTML;

    $('body').prepend(totalSectionsHTML);

    // Add real content

    var unitList = document.createDocumentFragment(),
        tabList = document.createDocumentFragment();
    $.each(data.units, function(i, unit){
      if (i !== abpApp.getAuxUnit(data)) {
        var unitTitle = unit.title,
            unitDescription = unit.description,
            unitNumberBase = unit.number - 1,
            unitNumber = ('0' + unitNumberBase).slice(-2),
            unitImage = unit.image;
        var unitListItem = document.createElement('div');
        unitListItem.className = 'abp-units-slider-item';
        unitListItem.innerHTML = '<article class="abp-unit"><a href="javascript:void(0)" class="abp-js-load-unit abp-unit-inner" data-unit="'+unitNumberBase+'"><div class="abp-unit-number abp-unit-number"><div class="abp-unit-number-inner"><span>'+unitNumber+'</span></div></div><header class="abp-unit-header"> <h2 class="abp-title-4">'+unitTitle+'</h2> </header> <div class="abp-unit-content"> <div class="abp-unit-content-description">'+unitDescription+'</div> <div class="abp-unit-content-background"> <img src="'+unitImage+'"></div></div></a></article>';
        unitList.appendChild(unitListItem);
      }
      var subunits = unit.subunits;
      $.each(subunits, function(i, subunit){
        var subunitIsAux = subunit.tag === abpApp.config.auxTab;
        if (subunitIsAux) {
          var subunitHidden = subunit.ocultar;
          if (!subunitHidden) {
            var subunitTitle = subunit.title,
                subunitID = subunit.id,
                subunitFileurl = subunit.fileurl,
                subunitUrl = subunit.url,
                subunitType = subunit.type,
                subunitIsMedia = (subunitType === 'img' || subunitType === 'musica' || subunitType === 'video'),
                subunitOnClick = (subunitIsMedia) ? subunit.onclickTitle :"abpApp.openActivity('" + subunitUrl + "'," + subunitID + ", '"+subunitType+"')",
                subunitIsOnlyVisibleTeacher = subunit.onlyVisibleTeachers;
            if (subunitIsOnlyVisibleTeacher && !abpApp.config.isStudent || !subunitIsOnlyVisibleTeacher) {
              var tabListItem = document.createElement('li');

              tabListItem.innerHTML = '<a href="javascript:void(0)" onclick="'+subunitOnClick+'"><span>'+subunitTitle+'</span></a>';
              tabList.appendChild(tabListItem);
            }
          }
        }

      });

    });

    // Create Units slider
    var $unitsWrapper = $('.abp-units-slider');

    if ($unitsWrapper.hasClass('slick-initialized')) {
      $unitsWrapper.slick('unslick');
    }
    $unitsWrapper.empty();
    $unitsWrapper[0].appendChild(unitList);

    $unitsWrapper.slick(abpApp.config.carouselOpt);

    var $unitsWrapperContent = $unitsWrapper.closest('.abp-section-content');
    //$unitsWrapperContent.addClass('abp-slider--toleft');
    $unitsWrapper.on('afterChange', function(event, slick, currentSlide) {
      if (currentSlide > 0) {
        $unitsWrapperContent.removeClass('abp-slider--toleft');
      } else {
        $unitsWrapperContent.addClass('abp-slider--toleft');
      }

      if (slick.currentLeft >= 0) {
        $unitsWrapperContent.addClass('abp-slider--toright');
      } else {
        $unitsWrapperContent.removeClass('abp-slider--toright');
      }

    });


    // Create Auxiliary tabs

    var $tabs = $('.abp-section_home .abp-navigation_secondary > ul');
    $tabs.empty();
    $tabs[0].appendChild(tabList);

    var userBodyClass = (abpApp.config.isStudent) ? 'abp-body-user-student' : 'abp-body-user-not-student';

    $('body').imagesLoaded({background: 'div, a, span, button'}, function(){
      $('html').addClass('htmlReady');
      $('body').addClass(userBodyClass);
      $(window).resize(); // FIX to pagination on click
      $('html, body').animate({ scrollTop: 0 }, 1);
      if (currentHash !== '' && currentHash !== hash) {
        abpApp.loadByHash(currentHash,data);
      } else {
        $('body').addClass(bodyClass);
        abpApp.removeUnusedClass(bodyClass);
        if (updateHash) {
          abpApp.updateHashWithListener(hash);
        }
      }

      abpApp.config.firstTime = false;

    });

  } else {

    // Home already loaded
    if (currentHash !== '' && currentHash !== hash) {
      abpApp.loadByHash(currentHash,data);
    } else {
      $('body').addClass(bodyClass);
      abpApp.removeUnusedClass(bodyClass);
      if (updateHash) {
        abpApp.updateHashWithListener(hash);
      }
    }
    $('html, body').animate({ scrollTop: 0 }, 1);
    $(window).resize(); // FIX to pagination on click
  }

  // Object Fit support
  abpApp.objectFitSupport();

  // Resize and orientationChange
  $(window).on('resize orientationchange', function() {

    abpApp.config.windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    abpApp.config.windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    abpApp.config.documentHeight = $(document).height();

    var $unitsWrapper = $('.abp-units-slider');
    if (abpApp.config.windowWidth > 375) {
      if (!$unitsWrapper.hasClass('slick-initialized')) {
        $unitsWrapper.slick(abpApp.config.carouselOpt);
      }
    } else {
      if ($unitsWrapper.hasClass('slick-initialized')) {
        $unitsWrapper.slick('unslick');
      }
    }
  });

}


// Load units

abpApp.loadUnit = function(data,currentUnit,activeAreaTeacher,updateHash) {

  var currentIndex = 1;
  var currentPage = abpApp.config.tree[currentIndex].id,
      bodyClass = abpApp.config.tree[currentIndex].class,
      hash = abpApp.config.tree[currentIndex].hash,
      indexSuffix = (activeAreaTeacher) ? 1 : 0,
      suffix = abpApp.config.tree[currentIndex].suffix[indexSuffix],
      hashWithID = hash+currentUnit+suffix;

  if (!abpApp.unitAlreayLoaded) {
    abpApp.console("Load Unit "+currentUnit);

    var unitImage =  data.units[currentUnit].image,
        unitTitle =  data.units[currentUnit].title,
        unitID =  data.units[currentUnit].id,
        unitDescription =  data.units[currentUnit].description,
        unitNumberBase = data.units[currentUnit].number,
        unitNumberTemplate = unitNumberBase - 1,
        unitNumber = ('0' + unitNumberTemplate).slice(-2);

    var bookTitle = data.title;

    $('.navbar .libro-left .title').text(bookTitle +' > '+unitTitle);

    $('#abp-unit-title, #abp-unit-description, #abp-unit-image, #abp-unit-number').empty();
    if (unitTitle !== '') {
      $('#abp-unit-title').text(unitTitle);
    }
    if (unitDescription !== '') {
      $('#abp-unit-description').text(unitDescription);
    }
    if (unitImage !== '') {
      $('#abp-unit-image').prepend('<img src="'+unitImage+'">');
    }
    if (unitNumber !== '') {
      $('#abp-unit-number').text(unitNumber);
    }

    var subunitsStudents = 0,
        subunitsTeachers = 0;

    var subunits_1 = data.units[currentUnit].subunits,
        subunits_2 = data.units[currentUnit].resources,
        subunits = subunits_1.concat(subunits_2);
        subunitsList = document.createDocumentFragment(),
        subunitsTeachersList = document.createDocumentFragment();

    $.each(subunits, function(i, subunit){
      var subunitHidden = subunit.ocultar;
      if (!subunitHidden) {
        var subunitID = subunit.id,
            subunitTitle = subunit.title,
            subunitUrl = subunit.url,
            subunitDescription = subunit.description,
            subunitImage = subunit.image,
            subunitImageCode = (subunitImage !== '') ? '<img src="'+subunitImage+'" alt="'+subunitTitle+'">' : '',
            subunitIsOnlyVisibleTeacher = subunit.onlyVisibleTeachers;

        if (!subunitIsOnlyVisibleTeacher) {
          // Students subunits: Visibles for both (student and teacher)

          //Lock Subunits
          var subunitLockStatus = subunit.lock,
              isSubunitLock = (subunitLockStatus === abpApp.config.statusLock1 || subunitLockStatus === abpApp.config.statusLock2),
              subunitLockClass = (isSubunitLock) ? 'lock' : 'unlock';

          // Other info
          var subunitPages = subunit.pags,
              subunitPagesHTML = (subunitPages !== 0 && subunitPages !== '' && typeof subunitPages !== 'undefined') ? '<div class="abp-activity-pages"><span>'+subunitPages+'</span> '+abpApp.text.pages+'</div>' : '',
              subunitGrade = (typeof window.actividades !== 'undefined' && typeof window.actividades[subunitID] !== 'undefined') ? window.actividades[subunitID].nota : '',
              subunitGradeHTML = (subunitGrade !== '') ? '<div class="abp-activity-grade"><span>'+subunitGrade+'</span></div>' : '',
              subunitLockButton = (!abpApp.config.isStudent && subunit.canLockActivity) ? '<button class="abp-button-icon abp-button-lock abp-' + subunitLockClass + ' abp-js--lockActivity"> <i class="abp-icon" aria-hidden="true"></i> </button>' : (abpApp.config.isStudent && subunitLockClass==='lock') ? '<span class="abp-button-icon abp-button-lock abp-' + subunitLockClass + '"><i class="abp-icon" aria-hidden="true"></i></span>' : '';

          var subunitAux1 = (subunit.canSendHomework) ? '<div class="abp-resources-list-item-text-aux abp-resources-list-item-text-aux-1"><button class="abp-button-icon abp-button-sendactivity abp-js--sendActivity"><i class="abp-icon" aria-hidden="true"></i></button></div>' : '',
              subunitAux2 = '<div class="abp-resources-list-item-text-aux-left">'+subunitLockButton+'</div>',
              subunitAux3 = '<div class="abp-resources-list-item-text-aux abp-resources-list-item-text-aux-2">'+subunitAux2+'<div class="abp-resources-list-item-text-aux-right">'+subunitPagesHTML+subunitGradeHTML+'</div></div>';

          var subunitType = subunit.type,
              subunitIsMedia = (subunitType === 'img' || subunitType === 'musica' || subunitType === 'video'),
              subunitOnClick = (subunitIsMedia) ? subunit.onclickTitle : "abpApp.openActivity('" + subunitUrl + "'," + subunitID + ", '"+subunitType+"')",
              subunitUrlHTML = (abpApp.config.isStudent && (isSubunitLock)) ? 'class="abp-resources-list-item-inner abp-js--subunitLocked"' : 'class="abp-resources-list-item-inner" data-subunit-id="'+subunitID+'"',
              subunitTitleUrlHTML = (abpApp.config.isStudent && (isSubunitLock)) ? '<h3 class="abp-title-5">'+subunitTitle+'</h3>' : '<h3 class="abp-title-5 abp-js--gotoActivity" onclick="'+subunitOnClick+'">'+subunitTitle+'</h3>',
              subunitInnerHTML = '<article class="abp-resources-list-item-article '+subunitLockClass+'"> <a href="javascript:void(0)" '+subunitUrlHTML+'><div class="abp-resources-list-item-image"><div class="abp-resources-list-item-image-inner">'+subunitImageCode+'</div></div><div class="abp-resources-list-item-text"><div class="abp-resources-list-item-text-main"><div class="abp-resources-list-item-text-main-top">'+subunitAux1+subunitTitleUrlHTML+'</div><div class="abp-resources-list-item-text-main-bottom"><p>'+subunitDescription+'</p></div></div>'+subunitAux3+'</div></a></article>';

          var subunitsListItem = document.createElement('li');
          subunitsListItem.className = 'abp-resources-list-item';

          subunitsListItem.innerHTML = subunitInnerHTML;
          subunitsList.appendChild(subunitsListItem);
          subunitsStudents++;

        } else if (subunitIsOnlyVisibleTeacher && !abpApp.config.isStudent) {
          var subunitType = subunit.type,
              subunitIsMedia = (subunitType === 'img' || subunitType === 'musica' || subunitType === 'video'),
              subunitOnClick = (subunitIsMedia) ? subunit.onclickTitle : "abpApp.openActivity('" + subunitUrl + "'," + subunitID + ", '"+subunitType+"')",
              subunitTeachersTypeHTML = (subunitType !== '') ? '<span class="abp-resources-list-icon abp-resources-list-icon_'+subunitType+'" aria-hidden="true"></span>' : '',
              subunitTeachersUrlHTML = 'class="abp-resources-list-item-inner" onclick="'+subunitOnClick+'" data-subunit-id="'+subunitID+'"',
              subunitTeachersInnerHTML = '<article class="abp-resources-list-item-article"> <a href="javascript:void(0)" '+subunitTeachersUrlHTML+'><div class="abp-resources-list-item-image"><div class="abp-resources-list-item-image-inner">'+subunitTeachersTypeHTML+'</div></div><div class="abp-resources-list-item-text"><div class="abp-resources-list-item-text-main"><div class="abp-resources-list-item-text-main-top"><h3 class="abp-title-5">'+subunitTitle+'</h3></div><div class="abp-resources-list-item-text-main-bottom"><p>'+subunitDescription+'</p></div></div></div></a> </article>';

          var subunitsTeachersListItem = document.createElement('li');
          subunitsTeachersListItem.className = 'abp-resources-list-item';

          subunitsTeachersListItem.innerHTML = subunitTeachersInnerHTML;
          subunitsTeachersList.appendChild(subunitsTeachersListItem);
          subunitsTeachers++;
        }
      }

    });

    var $subunitsWrapper = $('#abp-studentarea .abp-resources-list');
    $subunitsWrapper.empty();
    if (subunitsStudents > 0) {
      $subunitsWrapper[0].appendChild(subunitsList);
    } else {
      $subunitsWrapper.append('<h2 class="abp-empty">'+abpApp.text.noresources+'</h2>');
    }

    var $subunitsTeachersWrapper = $('#abp-teacherarea .abp-resources-list');
    $subunitsTeachersWrapper.empty();
    if (subunitsTeachers > 0) {
      $subunitsTeachersWrapper[0].appendChild(subunitsTeachersList);
    } else {
      $subunitsTeachersWrapper.append('<h2 class="abp-empty">'+abpApp.text.noresources+'</h2>');
    }


    abpApp.unitAlreayLoaded = true;
    $('.abp-page_unit').imagesLoaded({background: 'div, a, span, button'}, function(){
      if (updateHash) {
        abpApp.updateHashWithListener(hashWithID);
      }

    });

  }

  $('.abp-page_unit').imagesLoaded({background: 'div, a, span, button'}, function(){
    // Object Fit support
    abpApp.objectFitSupport();
    abpApp.removeUnusedClass(bodyClass);
    $('body').addClass(bodyClass);
    $('html, body').animate({ scrollTop: 0 }, 1);
    // Current Tab
    if (activeAreaTeacher) {
      abpApp.loadUnitTab(1);
    } else {
      abpApp.loadUnitTab(0);
    }

  });

}


abpApp.loadUnitTab = function(tab) {

  abpApp.stopMultimediaContent();

  var $this = $('.abp-tabs li').eq(tab).children('a');
  var target = $this.attr('href'),
      tabIndex = tab,
      currentClassTab = 'abp-tab_current',
      currentClassContent = 'abp-tabs-content_current';

  $this.closest('li').addClass(currentClassTab).siblings().removeClass(currentClassTab);
  $(target).addClass(currentClassContent).siblings('.abp-tabs-content').removeClass(currentClassContent);

  var currentIndex = 1, // Unit Index
      currentHash = window.location.hash,
      currentHash = currentHash.replace('#',''),
      currentUnit = abpApp.getIDByHash(currentHash);
  var hash = abpApp.config.tree[currentIndex].hash,
      suffix = abpApp.config.tree[currentIndex].suffix[tabIndex],
      hashWithID = hash+currentUnit+suffix;

  window.location.hash = hashWithID;
}


//----------------------------------//
//                                  //
//  Document Ready                  //
//                                  //
//----------------------------------//


$(document).ready(function() {

  abpApp.config.windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
  abpApp.config.windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
  abpApp.config.documentHeight = $(document).height();

  $('body').on('click', '.abp-js-load-unit', function(e) {
    e.preventDefault();
    var currentUnit = $(this).data('unit'),
        suffix = abpApp.config.tree[1].suffix[0],
        newHash = abpApp.config.tree[1].hash + currentUnit + suffix;

    var $slider = $(this).closest('.abp-js--slider'),
        isInSlider = $slider.length;

    if (isInSlider) {
      var currentSlide = $(this).closest('.slick-slide').data('slick-index');
      $slider.slick('slickGoTo', currentSlide, true);
    }

    abpApp.updateHashWithListener(newHash);
  });

  $('body').on('click', '.abp-tabs a', function(e) {
    e.preventDefault();
    var tab = $(this).closest('li').index();
    abpApp.loadUnitTab(tab);
  });

  // Go Home
  $('body').on('click', '.abp-js-gohome', function(e) {

    e.preventDefault();

    abpApp.gohome();

  });


  // Simulate click outside buttons
    $('body').on('click', '.abp-resources-list-item-inner', function(event) {
    if(!$(event.target).closest('.abp-js--gotoActivity').length && !$(event.target).closest('.abp-js--sendActivity').length && !$(event.target).closest('.abp-js--lockActivity').length) {
      $(this).find('.abp-js--gotoActivity').click();
    }
  });

  $('body').on('click', '.abp-js--sendActivity', function(e) {
    e.preventDefault();
    var subunitID = $(this).closest('[data-subunit-id]').attr('data-subunit-id');
    openSendActivityHomework( subunitID , 1);
    e.stopPropagation();
  });

  $('body').on('click', '.abp-js--lockActivity', function(e) {
    e.preventDefault();
    var subunitID = $(this).closest('[data-subunit-id]').attr('data-subunit-id'),
        isLocked = !$(this).is('.abp-unlock');
    abpApp.toggleLockSubunit(subunitID, isLocked);
    e.stopPropagation();
  });

  $('body').on('click', '.abp-js--subunitLocked', function(e) {
    e.preventDefault();
    _showAlert(abpApp.text.lockcontent);
  });

  // Fix btn-book-index
  $('#btn-book-index').click(function(e) {
    e.preventDefault();
  });


});
