import React from "react";

const Login = () =>{
  return (<div className="text-center">
	<div className="logo">login</div>
	<div className="login-form-1">
		<form id="login-form" className="text-left">
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<label className="sr-only">Username</label>
						<input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="username" />
					</div>
                    <br/>
					<div className="form-group">
						<label className="sr-only">Password</label>
						<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="password"  />
					</div>
					<div className="form-group login-group-checkbox">
						<input type="checkbox" id="lg_remember" name="lg_remember" />
                        <label className="sr-only">remember</label>
					</div>
				</div>
				<button type="submit" className="login-button" ><i className="fa fa-chevron-right"></i></button>
			</div>
			<div className="etc-login-form">
				<p>forgot your password? <a href="/login/forgot" >click here</a></p>
				<p>new user? <a href="/login/register">create new account</a></p>
			</div>
		</form>
	</div>
</div>
  );
}

export default Login;