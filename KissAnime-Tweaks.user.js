// ==UserScript==
// @name         KissAnime Tweaks
// @namespace    https://github.com/KiraLT
// @version      0.3
// @description  KissAnime page Tweaks
// @author       KiraLT
// @match        http://kissanime.com/*
// @grant        None
// ==/UserScript==

DoDetect2 = function(){};

function tweaks_remove_ads() {
    jQuery('.divCloseBut a').click();
    jQuery('#divFloatLeft').remove();
    jQuery('#divFloatRight').remove();
    jQuery('#divAds').remove();
    jQuery('#divAds2').remove();
}

function tweaks_remove_top_social() {
    jQuery('#formSearch div:nth-child(1)').remove();
}

function tweaks_clean_index() {
    jQuery('.bigBarContainer').next().remove();
    jQuery('.bigBarContainer').next().remove();
    jQuery('.bigBarContainer').next().remove();
}

function tweaks_remove_panels() {
    var names = ["Remove ads", "Like me"];
    for (var i = 0; i < names.length; i++) {
        jQuery('.barTitle:contains("' + names[i] + '")').parent().remove();
    }
}

function tweaks_clean_anime() {
    jQuery('.episodeList div:first').next().find('div').not('table').remove();
}

tweaks_remove_ads();
tweaks_remove_top_social();
tweaks_clean_anime();
if (window.location.pathname === '/') {
    tweaks_remove_panels();
    tweaks_clean_index();
}
