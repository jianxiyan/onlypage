export default {
	loadHeader(){
		$('#header').load("views/myshow.html #myshowHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$('#content').load("views/myshow.html #myshowContent",function(){
			console.log("ok")
		})
	}
	
}
