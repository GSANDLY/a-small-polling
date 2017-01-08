// 输入
	// 存放的位置
	// 图片列表
	// 选项：宽高、轮播间隔、

// 输出
	// 轮播


(function(win, doc){
	win.polling = function(pollingDiv, 
						   {
							   width="100%",
							   height=200,
							   interval=1000
						   }, 
						   images
						   ){
		if(!pollingDiv){
			return false;
		}
		if (!images || Object.prototype.toString.call(images) != "[object Array]") {
			return false;
		}

		// 轮播框
		var polling = doc.createElement("div");
		var pDivStyle = polling.style;
		pDivStyle.width = width;
		pDivStyle.height = height;
		pDivStyle.position = "relative";

		// 上一张
		var previous = doc.createElement("div");
		previous.innerHTML = "<";
		var previousStyle = previous.style;
		previousStyle.width = "20px";
		previousStyle.height = height + "px";
		previousStyle.lineHeight = height + "px";
		previousStyle.backgroundColor = "rgba(100, 100, 100, 0.5)";
		previousStyle.position = "absolute";
		previousStyle.left = "0";
		previousStyle.cursor = "pointer";
		polling.appendChild(previous);

		// 图片显示框
		var img = doc.createElement("img");
		img.setAttribute("width", width);
		img.setAttribute("height", height);
		img.src = images[0];
		img.setAttribute("imgIndex", 0);
		polling.appendChild(img);

		// 下一张
		var next = doc.createElement("div");
		next.innerHTML = ">";
		var nextStyle = next.style;
		nextStyle.width = "20px";
		nextStyle.height = height + "px";
		nextStyle.lineHeight = height + "px";
		nextStyle.backgroundColor = "rgba(100, 100, 100, 0.5)";
		nextStyle.position = "absolute";
		nextStyle.right = "0";
		nextStyle.top = "0";
		nextStyle.cursor = "pointer";
		polling.appendChild(next);

		// 切换到上一张
		previous.onclick = function(){
			var currShow = img.getAttribute("imgIndex");
			if(currShow >= 1){
				img.src = images[currShow-1];
				img.setAttribute("imgIndex", currShow-1);
			}else{
				img.src = images[images.length-1];
				img.setAttribute("imgIndex", images.length-1);
			}
		}

		var nextPic = function(){
			var currShow = img.getAttribute("imgIndex");
			if(currShow < images.length-1){
				img.src = images[parseInt(currShow)+1];
				img.setAttribute("imgIndex", parseInt(currShow)+1);
			}else{
				img.src = images[0];
				img.setAttribute("imgIndex", 0);
			}
		}

		// 切换到下一张
		next.onclick = nextPic;
		setInterval(nextPic, interval);

		pollingDiv.appendChild(polling);
	}
})(window, document);






