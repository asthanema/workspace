document.getElementById("checkoutdiv").style.display = "none";

document.getElementById("products").onmouseover = function (event) {
	var elem = event.target;
	if(elem.hasAttribute('src')){
		//console.log(elem);
		var id=elem.getAttribute('src');
		id=id.split('.');
		var id1=id[0].split('/');
		changePic(id1[1],event.target);

	}
};

document.getElementById("checkout").onclick = function () {
	document.getElementById("checkoutdiv").style.display = "block";

};
var count=0;
document.getElementById("products").onclick = function (event) {
	
	var elem=event.target;
	if(elem.hasAttribute('src')){
		var id=elem.getAttribute('src');
		id=id.split('/');
		var id1=id[1].toUpperCase();
		var products=document.getElementsByClassName('product');
		for(var i=0 ; i < products.length; i++)
		{
			var title=products[i].getAttribute('title').toUpperCase();
		
			if (id1==title)
			{
				var price=products[i].lastChild.previousSibling.innerHTML;
			 count=addToCart(title,price);
			}
		}
	
	}
};
document.getElementById("cart-content").onclick = function (event) {
	var elem=event.target;
	
	if(elem.hasAttribute('src')){
		elem.parentNode.remove();
	}
};
document.getElementById("remove").onclick = function () {

	var myNode=document.getElementsByTagName('ol')[0];
	console.log(myNode)
	while (myNode.firstChild) {
		
		myNode.removeChild(myNode.firstChild);
	}
	//if(myNode.hasChildNodes()===false)
	
	var list=document.createElement('li');

	list.innerHTML="<label id='noItemMsg' >You have no items in your cart </label>";
	
	myNode.appendChild(list);
	
};

document.getElementById("submit").onclick = function () {
	var username=document.getElementById('txtUserName').value;
	var password=document.getElementById('txtPwd').value;
	console.log(document.getElementsByTagName('li').length);
	//var c=document.getElementById('cart-content').firstChild;
	//console.log(c);
 //.childElementCount;
	var url="http://localhost:9876/cab";
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', url, true);
	xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
	xhttp.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){
			console.log(xhttp.response)
		}
	}
				xhttp.send(JSON.stringify({
	
			name:username,
	            pwd: password,
				noofLaptops:document.getElementsByTagName('li').length
	
			}))

		
};

function changePic(name, elemImg) {
	var max = 3;
	var min = 1;

	var num = Math.floor(Math.random() * max - min + 1) + min;

	//elemImg.style.display="";
	elemImg.setAttribute("src", "laptops/" + name + "/" + name + "" + num + ".jpg");
}

function addToCart(title,price){
	document.getElementById('noItemMsg').style.display="none";
		var listItem=document.createElement('li');
   listItem.innerHTML="<img src='images/invalid.png' class='crossImg'/> &nbsp;"+title+"&nbsp;&nbsp; "+price;
   var dv=document.getElementById('cart-content');
  
   dv.getElementsByTagName('ol')[0].appendChild(listItem);
   
   return document.getElementsByTagName('li').length;

}
