var images = ["tree1.jpg", "tree2.jpg", "tree3.jpg"];
var square = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var imageSet = [];

var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

function loadGame() {
xhr.open('get', 'trees.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("frame").innerHTML = xhr.responseText;
		document.getElementById("frame").onload = randomimage();
    } 
}
xhr.send();
}

function randomimage() {
	var date = new Date();
	var imageNumber;
	for (i = 0; i < 9; i++) {
			imageNumber = (Math.floor(Math.random() * 3));
			document.getElementById(square[i]).src = "images/" + images[imageNumber];
			document.getElementById(square[i]).onclick = function() {click(this.id)}
			imageSet[i] = imageNumber;
		}
}
function notrandomimage() {
	var date = new Date();
	var imageNumber;
	for (i = 0; i < 9; i++) {
			imageNumber = 1;
			document.getElementById(square[i]).src = "images/" + images[imageNumber];
			document.getElementById(square[i]).onclick = function() {click(this.id)}
			imageSet[i] = imageNumber;
		}
}

function click(id) {
	if (id === "one")
	{
		imageSet[0] = nextimg(imageSet[0]);
		imageSet[1] = nextimg(imageSet[1]);
	    imageSet[3] = nextimg(imageSet[3]);
		document.getElementById(id).src = "images/" + images[imageSet[0]];
		document.getElementById("two").src = "images/" + images[imageSet[1]];
		document.getElementById("four").src = "images/" + images[imageSet[3]];
	}
	else if (id === "two")
	{
		imageSet[0] = nextimg(imageSet[0]);
		imageSet[1] = nextimg(imageSet[1]);
	    imageSet[2] = nextimg(imageSet[2]);
		imageSet[4] = nextimg(imageSet[4]);
		document.getElementById(id).src = "images/" + images[imageSet[1]];
		document.getElementById("one").src = "images/" + images[imageSet[0]];
		document.getElementById("three").src = "images/" + images[imageSet[2]];
		document.getElementById("five").src = "images/" + images[imageSet[4]];
	}
	else if (id === "three")
	{
		imageSet[2] = nextimg(imageSet[2]);
		imageSet[1] = nextimg(imageSet[1]);
	    imageSet[5] = nextimg(imageSet[5]);
		document.getElementById(id).src = "images/" + images[imageSet[2]];
		document.getElementById("two").src = "images/" + images[imageSet[1]];
		document.getElementById("six").src = "images/" + images[imageSet[5]];	
	}
	else if (id === "four")
	{
		imageSet[0] = nextimg(imageSet[0]);
		imageSet[4] = nextimg(imageSet[4]);
	    imageSet[3] = nextimg(imageSet[3]);
		imageSet[6] = nextimg(imageSet[6]);
		document.getElementById(id).src = "images/" + images[imageSet[3]];
		document.getElementById("one").src = "images/" + images[imageSet[0]];
		document.getElementById("seven").src = "images/" + images[imageSet[6]];
		document.getElementById("five").src = "images/" + images[imageSet[4]];
	}
	else if (id === "five")
	{
		imageSet[4] = nextimg(imageSet[4]);
		imageSet[1] = nextimg(imageSet[1]);
	    imageSet[3] = nextimg(imageSet[3]);
		imageSet[5] = nextimg(imageSet[5]);
		imageSet[7] = nextimg(imageSet[7]);		
		document.getElementById(id).src = "images/" + images[imageSet[4]];
		document.getElementById("two").src = "images/" + images[imageSet[1]];
		document.getElementById("four").src = "images/" + images[imageSet[3]];
		document.getElementById("six").src = "images/" + images[imageSet[5]];
		document.getElementById("eight").src = "images/" + images[imageSet[7]];
	}
	else if (id === "six")
	{
		imageSet[5] = nextimg(imageSet[5]);
		imageSet[2] = nextimg(imageSet[2]);
	    imageSet[4] = nextimg(imageSet[4]);
		imageSet[8] = nextimg(imageSet[8]);
		document.getElementById(id).src = "images/" + images[imageSet[5]];
		document.getElementById("three").src = "images/" + images[imageSet[2]];
		document.getElementById("five").src = "images/" + images[imageSet[4]];
		document.getElementById("nine").src = "images/" + images[imageSet[8]];
	}
	else if (id === "seven")
	{
		imageSet[6] = nextimg(imageSet[6]);
		imageSet[3] = nextimg(imageSet[3]);
	    imageSet[7] = nextimg(imageSet[7]);
		document.getElementById(id).src = "images/" + images[imageSet[6]];
		document.getElementById("four").src = "images/" + images[imageSet[3]];
		document.getElementById("eight").src = "images/" + images[imageSet[7]];
	}
	else if (id === "eight")
	{
		imageSet[7] = nextimg(imageSet[7]);
		imageSet[4] = nextimg(imageSet[4]);
	    imageSet[6] = nextimg(imageSet[6]);
		imageSet[8] = nextimg(imageSet[8]);
		document.getElementById(id).src = "images/" + images[imageSet[7]];
		document.getElementById("seven").src = "images/" + images[imageSet[6]];
		document.getElementById("five").src = "images/" + images[imageSet[4]];
		document.getElementById("nine").src = "images/" + images[imageSet[8]];
	}
	else if (id === "nine")
	{
		imageSet[8] = nextimg(imageSet[8]);
		imageSet[5] = nextimg(imageSet[5]);
	    imageSet[7] = nextimg(imageSet[7]);
		document.getElementById(id).src = "images/" + images[imageSet[8]];
		document.getElementById("six").src = "images/" + images[imageSet[5]];
		document.getElementById("eight").src = "images/" + images[imageSet[7]];
	}

	if (equality())
	{ 
		setTimeout(function(){alert("Congratulations, you won!")},100);
	}
		
}

function nextimg(lastimg) {
	var nextImage;
	nextImage = lastimg + 1;
	if (nextImage > 2)
		nextImage = 0;
	return nextImage;
}

function equality()
{
	var equal;
	for (i = 0; i < 8; i++)
	{
		if (imageSet[i] === imageSet[i+1])
			{
				equal = 1;
			}
		else if (imageSet[i] != imageSet[i+1])
		{	
			equal = 0;
			break;
		}
	}
	return equal;
}