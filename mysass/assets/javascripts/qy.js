$(function(){
	getDate();
	setTimeout(function(){
		resolve_div($("#top-show"));
	},500)
	$(window).scroll(function(){
		var bot=50;
		if (($(window).scrollTop()) >= ($(document).height() - $(window).height())) {
			$('#loding').show();
			setTimeout(function(){
				getDate();
			},3000)
		}
	})
	$(window).resize(function(){
		setTimeout(function(){
				resolve_div($("#top-show"));
			},500)
	})
	//显示日历插件
	var mySchedule = new Schedule({
		el: '#schedule-box',
		//date: '2018-9-20',
		clickCb: function (y,m,d) {
			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		nextMonthCb: function (y,m,d) {
			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		nextYeayCb: function (y,m,d) {
			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		prevMonthCb: function (y,m,d) {
			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		},
		prevYearCb: function (y,m,d) {
			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
		}
	});
})
//读取本地json文件获取数据
function getDate(){
	var htmlTemples='<div class="panel panel-default">'+
		    '<div class="panel-heading" role="tab" id="headingOne{{id}}">'+
		      '<h4 class="panel-title">'+
		       ' <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne{{id}}" aria-expanded="false" aria-controls="collapseOne{{id}}">'+
		        '{{title}}'+
		        '</a>'+
		        '<span class="qy-right-span"><a class="" href="labels/{{labelUrl}}">{{labels}}</a></span>'+
		      '</h4>'+
		    '</div>'+
		    '<div id="collapseOne{{id}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne{{id}}">'+
		      '<div class="panel-body">'+
					'{{introduction}}'+
		      		'<a href="article/{{articleUrl}}">查看全部</a>'+
		      '</div>'+
		    '</div>'+
	  	'</div>';
	$.getJSON('../assets/data/data.json',function(result){
		var str='';
		$.each(result,function(i,n){
			str+=htmlTemples.replace("{{title}}",n.title);
			str =str.replace("{{introduction}}",n.introduction).replace("{{labels}}",n.labels).replace("{{labelUrl}}",i);
			str =str.replace("{{articleUrl}}",i).replace(/{{id}}/g,Date.parse(new Date())+i);
		})
		$('#accordion').append(str);
		$('#loding').hide();
	})
}
//div模仿分解顶部div特效
//bug手动调整浏览器宽度然后刷新页面在某些像素上会出现width获取到滚动条宽度导致样不完整--已解决--调用时使用setTimeout(function(){resolve_div('#id')},500)
function resolve_div(obj){
	var height=obj.innerHeight(),
		width=obj.width(),
		qy_pbj=obj.find('#qy-special'),
		scrollH=obj.offset().top,
		str=''
		strline='';
		qy_pbj.Width=width;
		qy_pbj.Width=height;
	var specialHeight=30;
	var temp='<div class="special-box ins" style="height:{{height}}px;width:{{width}}px;"></div>';
	var numX=Math.floor(width/specialHeight),
	    numX2=width%specialHeight,
	    numY=height/specialHeight;	
	    numX=numX2>0?numX+1:numX;
	    obj.css('background-color','');
	for (i=0;i<numY;i++) {
		str='<div class="qy-line" style="height:'+specialHeight+'px;">'
		for (j=0;j<numX;j++) {
			if(j+1==numX && numX2>0){
				str+=temp.replace("{{height}}",specialHeight).replace("{{width}}",numX2);
				strline+=str+'</div>';
				str='';
			}else{
				str+=temp.replace(/{{height}}|{{width}}/g,specialHeight);	
				if(j+1==numX){
					strline+=str+'</div>';
					str='';
				}
			}
		}
	}
	qy_pbj.append(strline);
	setTimeout(function(){
		obj.find('.qy-line').remove();
		obj.css('background-color','#5eafff');
	},3000)
} 