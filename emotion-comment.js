// by Mazbeib
// pay-store.net

$(function() {

	// Append an emoticon bar before comment-

form
	if (putEmoAbove) {
		$(putEmoAbove).before('<div 

class="emoWrap"> :) :( =( :waaa: :s ^_^ :D =D ^:D 

@@, ;) :-bd :-d :yaya: :&#39;( T_T :&#92; :p B) :Q 

:Ozz 7:( &#92;o/ **p &lt;3 0:) ^o^ :-a 7:O xV x@ X@ 

~x( =p* &#39;&#39;J :W :bye: :imhere: :cendol: 

:rolled: *bang* </div>');
	}
	function emo(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>(:|;|=|\^)/g, 

"<br> $1")
			.replace(emo, " <img src='" 

+ imgRep + "' class='emo delayLoad' alt='" + emoKey 

+ "' />"));
		});
	}
        emo(/\s:\)+/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/smile.gif", 

":)");
	emo(/\s;\)+/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/wink.gif", 

";)");
	emo(/\s:\(/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/sad.gif", 

":(");
	emo(/\s=\(/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/sadanimated.

gif", "=(");
	emo(/\s@@,/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/rolleyes.gif

", "@@,");
	emo(/\s:yaya:/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/yaya.gif", 

":yaya:");
	emo(/\s:s/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/sullen.gif", 

":s");
	emo(/\s:\\/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/memble.gif", 

":&#92;");
	emo(/\s:D/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/haha.gif", 

":D");
	emo(/\s=D/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/hihi.gif", 

"=D");
	emo(/\s\^:D/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/abovemehaha.

gif", "^:D");
	emo(/\s\^(\_|)\^/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/senyum-

tulus.gif", "^_^");
	emo(/\s:'\(/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/cry.gif", 

":&#39;(");
	emo(/\s:waaa:/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/wawa.gif", 

":waaa:");
	emo(/\sT_T/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/tears.gif", 

"T_T");
	emo(/\sB\)/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/cool.gif", 

"B)");
	emo(/\s:Q/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/smoking.gif"

, ":Q");
	emo(/\s\*\*p/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/crazy.gif", 

"**p");
	emo(/\s7:\(/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/conf.gif", 

"7:(");
	emo(/\s:p/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/wee.gif", 

":p");
	emo(/\s:Oz+/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/sleep.gif", 

":Ozz");
	emo(/\s7:O/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/angry.gif", 

"7:O");
	emo(/\s\\o\//ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/applause.gif

", "&#92;o/");
	emo(/\s&lt;3/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/love.gif", 

"&amp;amp;lt;3");
	emo(/\s0:\)+/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/angelgreen.g

if", "0:)");
	emo(/\s\^o\^/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/angelwhite.g

if", "^o^");
	emo(/\s:-a/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/vomit.gif", 

":-a");
	emo(/\sxV/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/demo.gif", 

"xV");
	emo(/\sx\@/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/marahbesar.g

if", "x@");
	emo(/\s\X\@/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/arrgh.gif", 

"X@");
	emo(/\s:-d/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/top.gif", 

":-d");
	emo(/\s:-bd/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/topmarkotop.

gif", ":-bd");
	emo(/\s\~x\(+/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/ugh.gif", 

"~x(");
	emo(/\s:bye:/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/bye.gif", 

":bye:");
	emo(/\s:W/g, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/explain.gif"

, ":W");
	emo(/\s=p\*/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/ball2.gif", 

"=p*");
	emo(/\s:imhere:/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/imhere.gif", 

":imhere:");
	emo(/\s:cendol:/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/cendol.gif", 

":cendol:");
	emo(/\s:rolled:/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/rolled.gif", 

":rolled:");
	emo(/\s\*bang\*/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/bang.gif", 

"*bang*");
	emo(/\s\'\'J/ig, "https://ganteng-

project.googlecode.com/svn/trunk/smiley/call.gif", 

"&#39;&#39;J");

         // by Irvan Efendy
	// Show alert one times!
	$('.emoWrap').one("click", function() {
		if(emoMessage) {
			alert(emoMessage);
		}
	});
	// Click to show the code!
       // irvan-efendy.blogspot.com
	$('.emo').css('cursor', 'pointer').live

("click", function(e) {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" 

type="text" size="6" value=" ' + this.alt + '" />');
		$('.emoKey').trigger("select");
		e.stopPropagation();
	});
	$(document).on("click", function() {
		$('.emoKey').remove();
	});

});
