(function (blink) {
	'use strict';

	var AbpStyleDev = function() {
		blink.theme.styles.basic.apply(this, arguments);
	}

	AbpStyleDev.prototype = {
		bodyClassName: 'content_type_clase_abp_dev',
		ckEditorStyles: {
			name: 'abp-dev',
			styles: [
				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
			]
		},

		init: function() {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);

			blink.getCourse(idcurso).done((function(data) {
				this.onCourseLoaded(data);
			}).bind(this));
		},

		onCourseLoaded: function(data) {
			console.log(data);
		}
	};


	AbpStyleDev.prototype = _.extend({}, new blink.theme.styles.basic(), AbpStyleDev.prototype);

	blink.theme.styles['abp-dev'] = AbpStyleDev;

})( blink );
