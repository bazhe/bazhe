// JavaScript Document
jQuery.fn.switchTab = function(settings) {
	settings = jQuery.extend({//可配置参数
		defaultIndex: 0,
		titOnClassName: "on",
		titCell: "dt span",
		mainCell: "dd",
		delayTime: 250,
		interTime: 0,
		trigger: "click",
		effect: "",
		omitLinks: false,
		debug: ""
	},
	settings,
	{//插件信息
		version: 120
	});

	this.each(function() {
		var st;
		var curTagIndex = -1;
		var obj = jQuery(this);
		if(settings.omitLinks){
			settings.titCell = settings.titCell + "[href^='#']";
		}
		var oTit = obj.find(settings.titCell);
		var oMain = obj.find(settings.mainCell);
		var cellCount = oTit.length;//可切换个数
		var ShowSTCon = function (oi){
			if(oi != curTagIndex){
				oTit.eq(curTagIndex).removeClass(settings.titOnClassName);
				oMain.hide();
				obj.find(settings.titCell + ":eq(" + oi + ")").addClass(settings.titOnClassName);
				if(settings.delayTime <250 && settings.effect != "")settings.effect = "";
				if(settings.effect == "fade"){
					obj.find(settings.mainCell + ":eq(" + oi + ")").fadeIn({queue: false, duration: 250});
				}else if(settings.effect == "slide"){
					obj.find(settings.mainCell + ":eq(" + oi + ")").slideDown({queue: false, duration: 250});
				}else{
					obj.find(settings.mainCell + ":eq(" + oi + ")").show();
				}
				curTagIndex = oi;
			}
		};
		
		var ShowNext = function (){
			oTit.eq(curTagIndex).removeClass(settings.titOnClassName);
			oMain.hide();
			if(++curTagIndex >= cellCount)curTagIndex = 0;
			oTit.eq(curTagIndex).addClass(settings.titOnClassName);
			oMain.eq(curTagIndex).show();
			//ShowSTCon(curTagIndex);
		};
		
		//根据defaultIndex初始化
		ShowSTCon(settings.defaultIndex);

		//
		if(settings.interTime > 0){
			var sInterval;
			var autoPlay = function(){
				sInterval = setInterval(function(){
					ShowNext();
				}, settings.interTime);
			};
			$(settings.titCell,obj).mouseover(function(){
				clearInterval(sInterval);
			}).mouseout(function(){
				autoPlay();
			});
			autoPlay();
		}

		//处理交互事件
		oTit.each(function(i, ele){
			if(settings.trigger=="click"){
				jQuery(ele).click(function(){
					ShowSTCon(i);
					return false;//若有链接而选择了click模式, 链接不起作用
				});
			}else if(settings.delayTime > 0){
				jQuery(ele).hover(function(){
					st = setTimeout(function(){//延时触发
						ShowSTCon(i);
						st = null;
					}, settings.delayTime);
				},function(){
					if(st!=null)clearTimeout(st);
				});
			}else{
				jQuery(ele).mouseover(function(){
					ShowSTCon(i);
				});
			}
		});
	});
	if(settings.debug!="")alert(settings[settings.debug]);
	return this;
};
