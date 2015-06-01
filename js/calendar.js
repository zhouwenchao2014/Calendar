var onclicknexttimes=0;
var onclickpretimes=0;
window.onload=function(){
	debugger
	var now =new Date();
	getCalendarShow(now);
	onclicktimes=0;
	onclickpretimes=0;
	
}
function getCalendarShow(value){
	debugger
	//初始化时删除所有日历中的天数显示
	if($(".dayspan")!=null){
		var length =$(".dayspan").length;
		//注意在这里删除天数一定要倒着删除
		//因为入过顺序删除会，当i=1你删除第一个，这个数组会重组，原来的第二个就会变成第一个，第三个变成第二个
		//然后i=2是你在删除此时删除的的原数组的第三个，这样就会导致原数组的第二个删除不了，如此循环，
		//就会是原数组的所有偶数项删除不去
		for(var i=length-1;i>=0;i--){
			$(".dayspan")[i].remove();
		}
		
	}
	var tdLenght=$("td").length;
	for(var i=0;i<tdLenght-1;i++){
		$($("td")[i]).css({
			background: ''
		});
	}

	var day=value.getDate();
	var week=value.getDay();
	if(week==0){
		week=7;
	}
	var Month=value.getMonth();
	var Year=value.getYear();
	var Time=value.getTime();
	//删除标题月份
	$($("#DateId")[0]).remove();
	//添加新的月份
	$($("#dateDiv")[0]).append("<span id='DateId'>"+(Year+1900)+"年"+(Month+1)+'月'+day+"日"+"</span>");
	var temp = new Date(Year,Month+1,0); 
	var days=temp.getDate();
	//一个月有几周
	var weeks=(days+(week-1))/7;
	if((days+(week-1))%7==0){
		weeks=(days+(week-1))/7;
	}else{
		weeks=parseInt((days+(week-1))/7)+1;
	}
	//判断本月有几周，并动态显示有几行
	for(var i=1;i<7;i++){
		if(i>weeks){
			document.getElementById("row"+i).style.display="none";
		}else{
			document.getElementById("row"+i).style.display="";
		}	
	}
	
	for(var i=1;i<days+1;i++){
		$($("#"+(i+(week-1))+"")[0]).append("<span class='dayspan'>"+i+"</span>");
	}
	$($("#"+(day+(week-1))+"")[0]).css({
		background: '#AF6046'
	});
}
function getNextMonth(){
	debugger
	var now =new Date();
	var Month=now.getMonth();
	now.setMonth(Month+onclicknexttimes+1-onclickpretimes);
	getCalendarShow(now);
	onclicknexttimes=onclicknexttimes+1;
}
function getPreMonth(){
	var now =new Date();
	var Month=now.getMonth();
	now.setMonth(Month-onclickpretimes-1+onclicknexttimes);
	getCalendarShow(now);
	onclickpretimes=onclickpretimes+1;
}