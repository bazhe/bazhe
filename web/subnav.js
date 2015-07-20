// JavaScript Document
$(function(){	
	jumpMenu();
	Professional();	
	
	/* 首页切换菜单 */
	function jumpMenu(){	
		var tag = $(".bgb_til ul li");
		var tagStr = $(".game_data ul");
		tag.filter(":first").addClass("pic_s0");
		tag.mouseover(function(){
			var index = tag.index($(this));
			var len = tag.size();
			for(var i=0; i<len; i++){
				tag.removeClass("pic_s"+i);
			}
			tag.eq(index).addClass("pic_s"+index);			
			tagStr.filter(":visible").hide()
			tagStr.eq(index).show();
		});	
	}
	
	/* 五大职业 */
	function Professional(){
		var pic = $(".zy_nav ul li");
		var tags = $("div .zydata");
		//pic.filter(":first").addClass("display_0");
		pic.mouseover(function(){
			var index = pic.index($(this));
//			var len = pic.size();			
//			for(var i=0; i<len; i++){
//				pic.removeClass("display_"+i);
//			}
//			pic.eq(index).addClass("display_"+index);			
			tags.filter(":visible").hide()
			tags.eq(index).show();
		});
	}
	
	/* 快速通道 */
	function dropdown(){
		var main_menu = $("ul#content_nav");
		var header_menu = main_menu.find("ul").parent();
		header_menu.each(function(i){
			var cur_obj = $(this);
			var sub_ul  = $(this).find("ul:eq(0)");
			
			this.is_top_header = cur_obj.parents("ul").size()==1?true:false;
			
			sub_ul.css("top",this.is_top_header?23+"px":-1);
			
			
			cur_obj.hover(function(e){
				var pos = $("li",main_menu).index(this);
				var tar_ul = $(this).find("ul:eq(0)");
				var dist = 0;
				if(tar_ul.queue().length<=1){
					tar_ul.css({"left":this.is_top_header?0:90+"px"}).slideDown("fast");
				}
			},function(e){
				var tar_ul = $(this).find("ul:eq(0)");
				tar_ul.slideUp("fast");
			});
		});
	}

    dropdown();
})