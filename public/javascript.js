
function changeAbout()
{
	document.getElementById("p1").style.color="red";
	document.getElementById("p2").style.color="red";
	document.getElementById("p1").style.fontFamily="Cursive";
	document.getElementById("p2").style.fontFamily="Cursive";
	document.getElementById("h1").style.color="yellow";
	document.getElementById("h2").style.color="yellow";
	document.getElementById("h1").style.fontFamily="Cursive";
	document.getElementById("h2").style.fontFamily="Cursive";
}
function changepic1()
{
	document.getElementById("img1").src="image/joker.jpg";
}
function repic1()
{
	document.getElementById("img1").src="image/about.jpg";
}
function changepic2()
{
	document.getElementById("img2").src="image/babu.jpg";
}
function repic2()
{
	document.getElementById("img2").src="image/menu.jpg";
}
function changemenu()
{
	document.getElementById("dl").style.color="red";
	document.getElementById("dl").style.fontFamily="Cursive";
	document.getElementById("h3").style.color="yellow";
	document.getElementById("h3").style.fontFamily="Cursive";
}
function changeh4()
{
	document.getElementById("h4").style.color="green";
	document.getElementById("h4").style.fontFamily="Cursive";
}
function red()
{
	document.getElementById("grad").style.backgroundImage="linear-gradient(black, red)";
	document.getElementById("bar").style.backgroundImage="linear-gradient(black, red)";
	document.getElementById("le").style.backgroundImage="linear-gradient(black, red)";
	document.getElementById("foot").style.backgroundImage="linear-gradient(black, red)";
	document.getElementById("card1").style.backgroundImage="linear-gradient(black, red)";
	document.getElementById("card2").style.backgroundImage="linear-gradient(black, red)";
}
function yellow()
{
	document.getElementById("grad").style.backgroundImage="linear-gradient(black, yellow)";
	document.getElementById("bar").style.backgroundImage="linear-gradient(black, yellow)";
	document.getElementById("le").style.backgroundImage="linear-gradient(black, yellow)";
	document.getElementById("foot").style.backgroundImage="linear-gradient(black, yellow)";
	document.getElementById("card1").style.backgroundImage="linear-gradient(black, yellow)";
	document.getElementById("card2").style.backgroundImage="linear-gradient(black, yellow)";
}
function blue()
{
	document.getElementById("grad").style.backgroundImage="linear-gradient(black, blue)";
	document.getElementById("bar").style.backgroundImage="linear-gradient(black, blue)";
	document.getElementById("le").style.backgroundImage="linear-gradient(black, blue)";
	document.getElementById("foot").style.backgroundImage="linear-gradient(black, blue)";
	document.getElementById("card1").style.backgroundImage="linear-gradient(black, blue)";
	document.getElementById("card2").style.backgroundImage="linear-gradient(black, blue)";
}
function grey()
{
	document.getElementById("grad").style.backgroundImage="linear-gradient(black, grey)";
	document.getElementById("bar").style.backgroundImage="linear-gradient(black, grey)";
	document.getElementById("le").style.backgroundImage="linear-gradient(black, grey)";
	document.getElementById("foot").style.backgroundImage="linear-gradient(black, grey)";
	document.getElementById("card1").style.backgroundImage="linear-gradient(black, grey)";
	document.getElementById("card2").style.backgroundImage="linear-gradient(black, grey)";
}
function pink()
{
	document.getElementById("grad").style.backgroundImage="linear-gradient(black, pink)";
	document.getElementById("bar").style.backgroundImage="linear-gradient(black, pink)";
	document.getElementById("le").style.backgroundImage="linear-gradient(black, pink)";
	document.getElementById("foot").style.backgroundImage="linear-gradient(black, pink)";
	document.getElementById("card1").style.backgroundImage="linear-gradient(black, pink)";
	document.getElementById("card2").style.backgroundImage="linear-gradient(black, pink)";
}
function chngclr()
{
	document.getElementById("ch").style.color="green";
	document.getElementById("ch").style.borderBottom="2px dotted green";
}
function reclr()
{
	document.getElementById("ch").style.color="white";
	document.getElementById("ch").style.borderBottom="2px solid white";
}
function backpic1()
{
	document.body.style.backgroundImage="url('image/chef1.jpg')";
}
function backpic2()
{
	document.body.style.backgroundImage="url('image/chef1.png')";
}
function checkform()
{
	var	a=document.getElementById("f1").value;
	var	b=document.getElementById("f2").value;
	var	c=document.getElementById("em").value;
	var	d=document.getElementById("ph").value;
	if(a=="" | b=="" | c=="" | d=="" )
	{
		alert("Fill The Form First");
		return false;
	}
}