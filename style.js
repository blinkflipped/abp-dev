(function (blink) {
  'use strict';

  var AbpDevStyle = function () {
    blink.theme.styles.basic.apply(this, arguments);
  };

  AbpDevStyle.prototype = {
    parent: blink.theme.styles.basic.prototype,
    bodyClassName: 'content_type_clase_abp-dev',
    extraPlugins: ['image2'],
    activityInitialized: false,
    pageIsLoading: false,
    ckEditorStyles: {
      name: 'abp-dev',
      styles: [
        { name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
        { name: 'Enunciado', element: 'span', attributes: { 'class': 'oxfl-enunciado'} }
      ]
    },

    init: function() {
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

      this.loadUserData(); // TODO necessary?
      var updateHash = false;
      abpApp.loadHomepage(data, updateHash);*/

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

  blink.theme.styles['abp-dev'] = AbpDevStyle;

  blink.events.on('digitalbook:bpdfloaded', function() {
    // Ejemplo carga de datos del curso desde un libro digital.
    blink.getCourse(idcurso).done(function(data) {
      var style = new AbpDevStyle;
      style.onCourseDataLoaded(data);
    });
  });

})( blink );
