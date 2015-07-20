// JavaScript Document
$(document).ready(function(){	
	function slide(o1,o2,o3,o4,o5,o6,o7,o8){/*切换图,切换按钮,按钮现时样式,切换时间,默认位置,鼠标事件(click,mouseover),向左,向右*/
		var pica = $(o1)
		var picNava = $(o2)
		var onclass = o3
		var ctime = o4
		var startnum = o5
		var events = o6
		var backs = $(o7)
		var nexts = $(o8)
		$(pica.get(startnum)).show()
		$(picNava.get(startnum)).addClass(onclass)
		var num = startnum
		function Cpic(){
			picNava.removeClass(onclass);
			pica.stop().css({"opacity":1,"z-index":1}).hide()
			$(pica.get(num)).css("z-index",2).show()
			num = num+1
			if (num == pica.length){
				num = 0
			}
			$(picNava.get(num)).addClass(onclass);
			$(pica.get(num)).css("z-index",3).fadeIn()
		}
		var setPic = setInterval(Cpic,ctime)
		pica.mouseover(function(){
			clearInterval(setPic)
		})
		pica.mouseout(function(){
			setPic  = setInterval(Cpic,ctime)
		})
		picNava.each(function(i){
			function slideevent(){
				clearInterval(setPic)
				if (num != i){
					picNava.removeClass(onclass);
					pica.stop().css({"opacity":1,"z-index":1}).hide()
					$(pica.get(num)).css("z-index",2).show()
					$(picNava.get(i)).addClass(onclass);
					$(pica.get(i)).css("z-index",3).fadeIn()
					num = i
				}
				setPic  = setInterval(Cpic,ctime)
			}
			if (events == "click"){
				$(this).click(function(){
					slideevent()
				})
			}
			else{
				$(this).mouseover(function(){
					slideevent()
				})
			}
		})
		backs.click(function(){
			clearInterval(setPic)
			picNava.removeClass(onclass);
			pica.stop().css({"opacity":1,"z-index":1}).hide()
			$(pica.get(num)).css("z-index",2).show()
			if (num == 0){
				num = pica.length-1
			}
			else{
				num--
			}
			$(picNava.get(num)).addClass(onclass);
			$(pica.get(num)).css("z-index",3).fadeIn()
		})
		nexts.click(function(){
			clearInterval(setPic)
			Cpic()
			setPic  = setInterval(Cpic,ctime)
		})
	}

	slide(".pic > a",".pic_b a","current",3000,0,"mouseover",".aBack",".aNext")	
})