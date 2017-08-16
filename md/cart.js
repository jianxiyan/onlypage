export default {
	loadHeader(){
		$('#header').load("views/cart.html #cartHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$('#content').load("views/cart.html #cartContent",function(){
			console.log("ok")
		})
	}
	
}
