var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var email_error = document.getElementsByTagName('email_error');

var email_error = document.getElementsByTagName('pass_error');
  email.addEventlistener('textInput',email_Verify);
  password.addEventlistener('textInput',pass_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border= "1px solid red";
		email_error.style.display="block";
		email.focus();
		return false ;
	}
	if (password.value.length < 6) {
		password.style.border= "1px solid red";
		password_error.style.display="block";
		password.focus();
		return false ;
	}
}

function email_verify(){
	if (email.value.length >=8){
		email.style.border="1px solid silver";
		email_error.style.display="none";
		return true ;
	}

function email_verify(){
	if (password.value.length >=5){
		password.style.border="1px solid silver";
		pass_error.style.display="none";
		return true ;
	}
}
