let username=document.getElementById("username");
let password=document.getElementById("password");


function fetchloginData() 
{

	let userCred=JSON.parse(localStorage.getItem("userData"));

	if ((("username".value)==(userCred.username))&& ((password.value)==(userCred.password))) 
	{

		open("Home Page.html");

	}
	 else 
	{

		alert("Wrong Credentials");
	}
	

}
