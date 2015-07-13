// ==UserScript==
// @name         KissAnime Tweaks
// @namespace    https://github.com/KiraLT
// @version      0.2
// @description  KissAnime page Tweaks
// @author       KiraLT
// @match        http://kissanime.com/*
// @grant        None
// ==/UserScript==

// Disable Adblock Detection
DoDetect2 = function(){};

// Hide ads
jQuery('.divCloseBut a').click();
jQuery('#divFloatLeft').remove();
jQuery('#divFloatRight').remove();
jQuery('#divAds').remove();
jQuery('#divAds2').remove();

// Premium in navigation
jQuery('#menu_box a[href="/Message/GetKPoint"]').html('&nbsp;&nbsp;<img src="http://kissanime.com/Content/images/kpoint.png">&nbsp;KPoint: 1000000').attr('href', '#');
jQuery('#menu_box a[href="/Message/GoPremium"]').html('&nbsp;&nbsp;<img src="http://kissanime.com/Content/images/genre.png">&nbsp;Premium for ever').attr('href', '#');

// Index page treaks
if (window.location.pathname === '/') {
    // Remove "Remove ads" panel
    jQuery('.barTitle:contains("Remove ads")').parent().remove();
}
