(window.webpackJsonp=window.webpackJsonp||[]).push([["locale-nl"],{"+s0g":function(e,n,a){!function(e){"use strict";var n="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),a="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),t=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,t){return e?/-MMM-/.test(t)?a[e.month()]:n[e.month()]:n},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:t,longMonthsParse:t,shortMonthsParse:t,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(a("wd/R"))},DHBJ:function(e,n,a){(function(e){!function(){if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var n=e.fn.select2.amd;n.define("select2/i18n/nl",[],(function(){return{errorLoading:function(){return"De resultaten konden niet worden geladen."},inputTooLong:function(e){return"Gelieve "+(e.input.length-e.maximum)+" karakters te verwijderen"},inputTooShort:function(e){return"Gelieve "+(e.minimum-e.input.length)+" of meer karakters in te voeren"},loadingMore:function(){return"Meer resultaten laden…"},maximumSelected:function(e){var n="Er "+(1==e.maximum?"kan":"kunnen")+" maar "+e.maximum+" item";return 1!=e.maximum&&(n+="s"),n+" worden geselecteerd"},noResults:function(){return"Geen resultaten gevonden…"},searching:function(){return"Zoeken…"},removeAllItems:function(){return"Verwijder alle items"}}})),n.define,n.require}()}).call(this,a("EVdn"))},G6Dt:function(e,n,a){a("+s0g"),a("DHBJ"),a("WJWz")},WJWz:function(e,n,a){var t,r;"undefined"!=typeof self&&self,e.exports=(t=a("wd/R"),r=a("Io7t"),function(e){function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var a={};return n.m=e,n.c=a,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=177)}({0:function(e,n){e.exports=t},1:function(e,n){e.exports=r},177:function(e,n,a){Object.defineProperty(n,"__esModule",{value:!0}),a(178);var t=a(1);t.datepickerLocale("nl","nl",{closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),t.locale("nl",{buttonText:{year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Hele dag",eventLimitText:"extra",noEventsMessage:"Geen evenementen om te laten zien"})},178:function(e,n,a){!function(e){var n="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),a="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),t=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,t){return e?/-MMM-/.test(t)?a[e.month()]:n[e.month()]:n},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:t,longMonthsParse:t,shortMonthsParse:t,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(a(0))}}))}},[["G6Dt","runtime",0]]]);