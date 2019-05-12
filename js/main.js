(function(){
	let pinged = false
	let sticky = document.querySelector("#sticky-navigation")
	let nav = document.querySelector("#navigation")
	
	let stickyScrollPoint = document.querySelector(".h-img").offsetHeight

	function pingToTop(){
		if(pinged) return;
		sticky.classList.add("pined")
		nav.classList.add("hidden")
		sticky.classList.remove("hidden")
		pinged = true;
	}

	function unPingFromTop(){
		if(!pinged) return
		sticky.classList.remove("pined")
		nav.classList.remove("hidden")
		sticky.classList.add("hidden")
		pinged = false
	}


	window.addEventListener("scroll", function(ev){
		//Se obtiene la altura y distancia, altura, etc.
		let coords = nav.getBoundingClientRect()
		if(window.scrollY < stickyScrollPoint) return unPingFromTop()
		if(coords.top <= 0) return pingToTop()
		unPingFromTop()
	})

})()