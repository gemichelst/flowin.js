/* 
FLOWIN.JS

author:		Michael Matzat
web:		https://github.com/gemichelst/flowinJS


requirements: 
- jQUERY > 3
- STYLUS
*/

/* INIT FLOWIN.JS */        
var flowin = {
	hover_scaleup: '1.25',
	translate: '200%',
	delay: '.25s',
	delay_ms: '250',
	duration_ms: '250',
	duration: '.25s',
	hover_delay: '.12s',
	hover_delay_ms: '50',
	hover_duration_ms: '50',
	hover_duration: '.12s'
};

jQuery.each( flowin, function( key, value ) {
  console.log( "key", key, "value", value );
});

(function($) {
    $.fn.removeClassSimilar = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
})(jQuery);
// $selector.removeClassSimilar('classprefix-*');


// hover
console.log('hover_duration_ms: '+flowin.hover_duration_ms);
$( ".flowin_hover-scaleup" )
  .mouseover(function() {
  	$( this ).removeClassSimilar('flowin_fadein-*');
  	$( this ).animate({scale: flowin.hover_scaleup}, "fast" );
    // $( this ).css('transform','scale('+flowin.hover_scaleup+')');
  })
  .mouseout(function() {
    // $( this ).css('transform','scale(1)');
    $( this ).animate({scale: 1}, "fast" );
  });
