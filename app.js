import "./scss/main.scss";

import Home from "./md/home.js"
import Kind from "./md/kind.js"
import Cart from "./md/cart.js"
import Myshow from "./md/myshow.js"
import More from "./md/more.js"

Home.loadHeader();
Home.loadContent()
$('footer').find('li').on('tap',function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active")
	
	switch(index){
		case 0:
		 console.log("首页")
		 Home.loadHeader();
		 Home.loadContent()
		break;
		case 1:
		 console.log("分类")
		 Kind.loadHeader();
		 Kind.loadContent()
		break;
		case 2:
		 console.log("购物车")
		 Cart.loadHeader();
		 Cart.loadContent()
		break;
		case 3:
		 console.log("我的秀")
		 Myshow.loadHeader();
		 Myshow.loadContent()
		break;
		case 4:
		 console.log("更多")
		 More.loadHeader();
		 More.loadContent()
		break;
	}
	 
	
})
