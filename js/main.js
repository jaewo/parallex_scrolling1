window.addEventListener("load", function(){
	/*
	var goPage;
	var topPos;
	var n=0;
	var navA=document.querySelectorAll(".nav a");
	var fixedNav=document.querySelector(".fixed_nav");
	var fixedNavA=document.querySelectorAll(".fixed_nav a");
	var contents=document.querySelector(".contents")

	for(var i=0; i<navA.length; i++){
		if(i == 0){
			navA[i].classList.add("on");
		}

		navA[i].addEventListener("click", function(e){
			e.preventDefault();
			goPage=e.target.getAttribute("href");
			// console.log("goPage : "+goPage);

			var targetArea=document.querySelector(goPage);
			targety=targetArea.offsetTop;
			var topPos=window.pageYOffset;
			var aniTimer=setInterval(function(){
				if(topPos == targety){
					clearInterval(aniTimer);
				}

				if(topPos > targety){
					if(Math.abs(topPos-targety) > 10){
						topPos-=5;
					}
					else{
						topPos=targety;
						// moving=false;
						clearInterval(aniTimer);
					}
				}
				else{
					if(Math.abs(topPos-targety) > 10){
						topPos+=5;
					}
					else{
						topPos=targety;
						// moving=false;
						clearInterval(aniTimer);
					}
				}
				// console.log("topPos : "+topPos+", targety : "+targety);

				window.scrollTo(0, topPos);
			}, 1);
		});
		fixedNavA[i].addEventListener("click", function(e){
			e.preventDefault();
			goPage=e.target.getAttribute("href");
			// console.log("goPage : "+goPage);

			var targetArea=document.querySelector(goPage);
			targety=targetArea.offsetTop;
			var topPos=window.pageYOffset;
			var aniTimer=setInterval(function(){
				if(topPos == targety){
					clearInterval(aniTimer);
				}

				if(topPos > targety){
					if(Math.abs(topPos-targety) > 10){
						topPos-=5;
					}
					else{
						topPos=targety;
						// moving=false;
						clearInterval(aniTimer);
					}
				}
				else{
					if(Math.abs(topPos-targety) > 10){
						topPos+=5;
					}
					else{
						topPos=targety;
						// moving=false;
						clearInterval(aniTimer);
					}
				}
				// console.log("topPos : "+topPos+", targety : "+targety);

				window.scrollTo(0, topPos);
			}, 1);
		});
	}
	window.addEventListener("scroll", function(){
		var topPos=window.pageYOffset;
		var docuHeight=document.body.scrollHeight;
		// console.log("topPos : "+topPos+", docuHeight : "+docuHeight);

		if(topPos < contents.children[1].offsetTop){ // #area2
			n=0;
		}
		else if(topPos >= contents.children[1].offsetTop && topPos < contents.children[2].offsetTop){ // #area2, #area3
			n=1;
		}
		else if(topPos >= contents.children[2].offsetTop && topPos < contents.children[3].offsetTop){ // #area3, #area4
			n=2;
		}
		else if(topPos >= contents.children[3].offsetTop && topPos < contents.children[4].offsetTop){ // #area4, #area5
			n=3;
		}
		else if(topPos < docuHeight){
			n=4;
		}
		// console.log("n : "+n);

		if(topPos > 80){
			if(fixedNav.classList.contains("show") == false){
				fixedNav.classList.add("show");
			}
		}
		else{
			fixedNav.classList.remove("show");
		}

		for(var i=0; i<navA.length; i++){
			if(i == n){
				navA[i].classList.add("on");
				fixedNavA[i].classList.add("on");
			}
			else{
				navA[i].classList.remove("on");
				fixedNavA[i].classList.remove("on");
			}
		}
	});
	*/

	/*
	var goPage;
	var topPos;
	var n=0;
	var navA=document.querySelectorAll(".nav a");
	var fixedNav=document.querySelector(".fixed_nav");
	var fixedNavA=document.querySelectorAll(".fixed_nav a");
	var contents=document.querySelector(".contents")

	for(var i=0; i<navA.length; i++){
		if(i == 0){
			navA[i].classList.add("on");
		}

		navA[i].addEventListener("click", function(e){
			e.preventDefault();
			goPage=e.target.getAttribute("href");
			// console.log("goPage : "+goPage);
			goAnimation();
		});
		fixedNavA[i].addEventListener("click", function(e){
			e.preventDefault();
			goPage=e.target.getAttribute("href");
			// console.log("goPage : "+goPage);
			goAnimation();
		});
	}

	function goAnimation(){
		var targetArea=document.querySelector(goPage);
		targety=targetArea.offsetTop;
		var topPos=window.pageYOffset;
		var aniTimer=setInterval(function(){
			if(topPos == targety){
				clearInterval(aniTimer);
			}

			if(topPos > targety){
				if(Math.abs(topPos-targety) > 10){
					topPos-=5;
				}
				else{
					topPos=targety;
					// moving=false;
					clearInterval(aniTimer);
				}
			}
			else{
				if(Math.abs(topPos-targety) > 10){
					topPos+=5;
				}
				else{
					topPos=targety;
					// moving=false;
					clearInterval(aniTimer);
				}
			}
			// console.log("topPos : "+topPos+", targety : "+targety);

			window.scrollTo(0, topPos);
		}, 1);
	}

	window.addEventListener("scroll", function(){
		var topPos=window.pageYOffset;
		var docuHeight=document.body.scrollHeight;
		// console.log("topPos : "+topPos+", docuHeight : "+docuHeight);

		if(topPos < contents.children[1].offsetTop){ // #area2
			n=0;
		}
		else if(topPos >= contents.children[1].offsetTop && topPos < contents.children[2].offsetTop){ // #area2, #area3
			n=1;
		}
		else if(topPos >= contents.children[2].offsetTop && topPos < contents.children[3].offsetTop){ // #area3, #area4
			n=2;
		}
		else if(topPos >= contents.children[3].offsetTop && topPos < contents.children[4].offsetTop){ // #area4, #area5
			n=3;
		}
		else if(topPos < docuHeight){
			n=4;
		}
		// console.log("n : "+n);

		if(topPos > 80){
			if(fixedNav.classList.contains("show") == false){
				fixedNav.classList.add("show");
			}
		}
		else{
			fixedNav.classList.remove("show");
		}

		for(var i=0; i<navA.length; i++){
			if(i == n){
				navA[i].classList.add("on");
				fixedNavA[i].classList.add("on");
			}
			else{
				navA[i].classList.remove("on");
				fixedNavA[i].classList.remove("on");
			}
		}
	});
	*/

	var goPage;
	var topPos;
	var n=0;
	var container=document.querySelector(".container");
	var nav=document.createElement("div");
	nav.setAttribute("class", "nav");
	nav.innerHTML="<ul></ul>";
	container.appendChild(nav);

	var fixedNav=document.createElement("div");
	fixedNav.setAttribute("class", "fixed_nav");
	fixedNav.innerHTML="<ul></ul>";
	container.appendChild(fixedNav);

	var contents=document.createElement("div");
	contents.setAttribute("class", "contents");
	container.appendChild(contents);

	// var navA=document.querySelectorAll(".nav a");
	var navA=null;

	// var fixedNavA=document.querySelectorAll(".fixed_nav a");
	var fixedNavA=null;

	var requestURL="../data/page.json";
	var request=new XMLHttpRequest();

	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				// console.log(data);

				for(key in data){
					// <li><a href="#area1">area1</a></li>
					var liList1=document.createElement("li");
					liList1.innerHTML='<a href="#'+key+'">'+key+'</a>\n';
					nav.children[0].appendChild(liList1);

					var liList2=liList1.cloneNode(true);
					// console.log(liList2);
					fixedNav.children[0].appendChild(liList2);

					// <div id="area1">content1</div>
					var contentDiv=document.createElement("div");
					contentDiv.setAttribute("id", key);
					contentDiv.innerText=data[key];
					contents.appendChild(contentDiv);
				}

				navA=document.querySelectorAll(".nav a");
				fixedNavA=document.querySelectorAll(".fixed_nav a");

				for(var i=0; i<navA.length; i++){
					if(i == 0){
						navA[i].classList.add("on");
					}

					navA[i].addEventListener("click", function(e){
						e.preventDefault();
						goPage=e.target.getAttribute("href");
						// console.log("goPage : "+goPage);
						goAnimation();
					});
					fixedNavA[i].addEventListener("click", function(e){
						e.preventDefault();
						goPage=e.target.getAttribute("href");
						// console.log("goPage : "+goPage);
						goAnimation();
					});
				}

				function goAnimation(){
					var targetArea=document.querySelector(goPage);
					targety=targetArea.offsetTop;
					var topPos=window.pageYOffset;
					var aniTimer=setInterval(function(){
						if(topPos == targety){
							clearInterval(aniTimer);
						}

						if(topPos > targety){
							if(Math.abs(topPos-targety) > 10){
								topPos-=5;
							}
							else{
								topPos=targety;
								// moving=false;
								clearInterval(aniTimer);
							}
						}
						else{
							if(Math.abs(topPos-targety) > 10){
								topPos+=5;
							}
							else{
								topPos=targety;
								// moving=false;
								clearInterval(aniTimer);
							}
						}
						// console.log("topPos : "+topPos+", targety : "+targety);

						window.scrollTo(0, topPos);
					}, 1);
				}

				window.addEventListener("scroll", function(){
					var topPos=window.pageYOffset;
					var docuHeight=document.body.scrollHeight;
					// console.log("topPos : "+topPos+", docuHeight : "+docuHeight);

					if(topPos < contents.children[1].offsetTop){ // #area2
						n=0;
					}
					else if(topPos >= contents.children[1].offsetTop && topPos < contents.children[2].offsetTop){ // #area2, #area3
						n=1;
					}
					else if(topPos >= contents.children[2].offsetTop && topPos < contents.children[3].offsetTop){ // #area3, #area4
						n=2;
					}
					else if(topPos >= contents.children[3].offsetTop && topPos < contents.children[4].offsetTop){ // #area4, #area5
						n=3;
					}
					else if(topPos < docuHeight){
						n=4;
					}
					// console.log("n : "+n);

					if(topPos > 80){
						if(fixedNav.classList.contains("show") == false){
							fixedNav.classList.add("show");
						}
					}
					else{
						fixedNav.classList.remove("show");
					}

					for(var i=0; i<navA.length; i++){
						if(i == n){
							navA[i].classList.add("on");
							fixedNavA[i].classList.add("on");
						}
						else{
							navA[i].classList.remove("on");
							fixedNavA[i].classList.remove("on");
						}
					}
				});
			});
		}, 10);
	}
	init();
});