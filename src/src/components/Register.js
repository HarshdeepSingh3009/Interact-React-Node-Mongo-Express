import React from "react";

const Register = () => {
    return(
        <div className="text-center">
	<div className="logo">register</div>
	<div className="login-form-1">
		<form id="register-form" className="text-left">
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<label className="sr-only">Email address</label>
						<input type="text" className="form-control" id="reg_username" name="reg_username" placeholder="username"/>
					</div>
					<div className="form-group">
						<label  className="sr-only">Password</label>
						<input type="password" className="form-control" id="reg_password" name="reg_password" placeholder="password"/>
					</div>
					<div className="form-group">
						<label className="sr-only">Password Confirm</label>
						<input type="password" className="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="confirm password"/>
					</div>
					
					<div className="form-group">
						<label  className="sr-only">Email</label>
						<input type="text" className="form-control" id="reg_email" name="reg_email" placeholder="email" />
					</div>
					<div className="form-group">
						<label  className="sr-only">Full Name</label>
						<input type="text" className="form-control" id="reg_fullname" name="reg_fullname" placeholder="full name"/>
					</div>
					
					<div className="form-group login-group-checkbox">
						<input type="radio" className="" name="reg_gender" id="male" placeholder="username"/>
						<label >male</label>
						
						<input type="radio" className="" name="reg_gender" id="female" placeholder="username"/>
						<label >female</label>
					</div>
					
					<div className="form-group login-group-checkbox">
						<input type="checkbox" className="" id="reg_agree" name="reg_agree" />
						<label >i agree with <a href="#">terms</a></label>
					</div>
				</div>
				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			<div className="etc-login-form">
				<p>already have an account? <a href="/">login here</a></p>
			</div>
		</form>
	</div>
</div>
    ); 
}

export default Register;