export default {
	loadHeader(){
		$('#header').load("views/more.html #moreHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$('#content').load("views/more.html #moreContent",function(){
			console.log("ok")
		})
	}
	
}
