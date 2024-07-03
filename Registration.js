let name=document.getElementById("name");
let email=document.getElementById("email id");
let pass=document.getElementById("password");
let phno=document.getElementById("phone no");



function registerUser() 
{

	let userData=
	{
		name:name.value,
		email email:pass.value,
		password:pass.value,
		phone no:phno.value,
		
	}

	saveData(userData);
	clearField();
	open("Login.html");

}

function clearField()
{
	name.value=" ";
    email.value=" ";
    pass.value=" ";
	phno.value=" ";
	

}

function saveData(userData)
{
   localStorage.setItem("userData",JSON.stringify(userData));
}