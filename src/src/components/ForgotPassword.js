import React from "react";
import ReactDOM from "react-dom";

const ForgotPassword = () =>{
    return (
        <div>
	  <div className="text-center">
	<div className="logo">forgot password</div>
	<div className="login-form-1">
		<form id="forgot-password-form" className="text-left">
			<div className="etc-login-form">
				<p>When you fill in your registered email address, you will be sent instructions on how to reset your password.</p>
			</div>
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<label className="sr-only">Email address</label>
						<input type="text" className="form-control" id="fp_email" name="fp_email" placeholder="email address"/>
					</div>
				</div>
				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
			</div>
			<div className="etc-login-form">
				<p>already have an account? <a href="/login">login here</a></p>
				<p>new user? <a href="/login/register">create new account</a></p>
			</div>
		</form>
	</div>
</div>
</div>
    );
}

export default ForgotPassword;
