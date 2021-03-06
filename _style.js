(function (blink) {
  'use strict';

  var AbpDevStyle = function () {
    blink.theme.styles.basic.apply(this, arguments);
  };

  AbpDevStyle.prototype = {
    parent: blink.theme.styles.basic.prototype,
    bodyClassName: 'content_type_clase_abp_dev',
    extraPlugins: ['image2'],
    activityInitialized: false,
    pageIsLoading: false,
    ckEditorStyles: {
      name: 'abp_dev',
      styles: [
        { name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} }
      ]
    },

    init: function() {

      console.log("init");

      this.activityInitialized = true;

      this.parent.init.call(this);

      this.fetchData();

      this.preventTouchCarousel();
    },

    preventTouchCarousel: function () {
      $('#swipeview-slider')
        .on('touchstart', function (event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          return;
        });
    },

   /**
     * Cierra el iframe de una actividad flipped.
     */
    closeIframe: function() {
      if (parent) {
        parent.cerrarIframe();
        //parent.$('#oxfl-modal-close-chapter').modal('hide');
        //parent.$('body').removeClass('oxfl-iframe-visible');
      }
    },

    /**
     * Carga de datos del libro en un actividad
     */
    fetchData: function() {
      blink.getCourse(idcurso).done((function(data) {
        this.onCourseDataLoaded(data);
      }).bind(this));
    },

    /**
    * Realiza operaciones al cargar los datos del curso.
    * @param  {Object} data Información del curso.
    */
    onCourseDataLoaded: function(data) {

      console.log("onCourseDataLoaded");

      /*var unit = _.findWhere(data.units, {id: window.idtema.toString()}); // TODO necessary?
      var subunit = _.findWhere(unit.subunits, {id: window.idclase.toString()}); // TODO necessary?

      this.cursoJson = data;

      this.loadUserData(); // TODO necessary?*/
      var updateHash = false;
      abpApp.loadHomepage(data, updateHash);

    },

    /**
     * Realiza operaciones al cargar los datos de la actividad.
     * @param  {Object} data Información de la actividad.
     */
    onActivityDataLoaded: function(data) {
      console.log("onActivityDataLoaded");

    },

    loadUserData: function() { // TODO necessary?
      var urlSeguimiento = '/include/javascript/seguimientoCurso.js.php?idcurso=' + idcurso;

      loadScript(urlSeguimiento, true, (function() {
        this.refreshUserData();
      }).bind(this));
    },


    /**
     * Operciones a ejecutar antes de salir de una ventana.
     */
    onAfterUnloadVentana: function() { // TODO necessary?
      if (window.actividades) {
        parent.actividades = window.actividades;
      }
    },

    /**
    * Añadimos hash para que al volver de una actividad del marketplace el menú vaya a la sección marketplace
    */
    processHash: function() { // TODO necessary? At least it would need some changes
      var hash = '',
      curso = blink.getCourse(idcurso);
      if (window.idtema == undefined) {
        return false;
      }
      // Se ejecuta asíncrono para que procesar el hash.
      var tema = _.find(curso.responseJSON.units, function(unit) {
        return unit.id == window.idtema && unit
      });

      var actividad = _.find(tema.subunits, function(subunit) {
        return subunit.id == window.idclase && subunit
      });

      if (!actividad.tag || actividad.tag !== 'marketplace') {
        return false
      }

      if (actividad.typeInt === 6 && actividad.type === 'actividad') {
        hash = '#marketplace_games';
      } else {
        hash = '#marketplace_summaries';
      }
      return hash;
    }

  };

  AbpDevStyle.prototype = _.extend({}, new blink.theme.styles.basic(), AbpDevStyle.prototype);

  blink.theme.styles['abp_dev'] = AbpDevStyle;

  blink.events.on('digitalbook:bpdfloaded', function() {
    // Ejemplo carga de datos del curso desde un libro digital.
    blink.getCourse(idcurso).done(function(data) {
      var style = new AbpDevStyle;
      style.onCourseDataLoaded(data);
    });
  });

})( blink );


// ████░██▄░▄██░████░████░████▄░██▄░██░░▄███▄░░██░░
// ██▄░░░▀███▀░░░██░░██▄░░██░██░███▄██░██▀░▀██░██░░
// ██▀░░░▄███▄░░░██░░██▀░░████▀░██▀███░███████░██░░
// ████░██▀░▀██░░██░░████░██░██░██░░██░██░░░██░████

// Vendors


/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),h.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?f(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function d(){var e=n.body;return e||(e=l(w?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var i,s,a,f,u="modernizr",p=l("div"),c=d();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=l("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!s}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),m("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,o,i){function f(){p&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var p,c,d,m,y,g=["modernizr","tspan","samp"];!P.style&&g.length;)p=!0,P.modElem=l(g.shift()),P.style=P.modElem.style;for(d=e.length,c=0;d>c;c++)if(m=e[c],y=P.style[m],a(m,"-")&&(m=s(m)),P.style[m]!==t){if(i||r(o,"undefined"))return f(),"pfx"==n?m:!0;try{P.style[m]=o}catch(h){}if(P.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function g(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?y(a,n,o,i):(a=(e+" "+j.join(s+" ")+s).split(" "),u(a,n,t))}var h=[],C=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",b=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};S.atRule=E;var j=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=j;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style}),S.testAllProps=g;var N=S.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?g(e,n,t):g(e,"pfx"))};Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(h),delete S.addTest,delete S.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);


// ABP App

var abpApp = window.abpAppApp || {};
abpApp.config = {};
abpApp.config.isDEV = (ENTORNO === 'DEV');


// Utils

// Object fit support
abpApp.objectFitSupport = function() {

	if ( ! Modernizr.objectfit ) {
		$('.multimedia-container').each(function () {
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



abpApp.loadHomepage = function(data,updateHash) {

  console.log("Load Homepage");

	// Object Fit support
	abpApp.objectFitSupport();

}
