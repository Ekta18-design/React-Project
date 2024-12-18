
import React from "react";
import { Link } from "react-router-dom";

function Login () {
	
  return(
    <>
		<div id="kt_body" className="auth-bg">
		
		<div className="d-flex flex-column flex-root">
			
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
		
				<Link to="/" className="d-block d-lg-none mx-auto py-20">
					<img alt="Logo" src="assets/media/logos/default.svg" className="theme-light-show h-25px" />
					<img alt="Logo" src="assets/media/logos/default-dark.svg" className="theme-dark-show h-25px" />
				</Link>
				
				<div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
				
					<div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
					
						<div className="d-flex flex-stack py-2">
							
							<div className="me-2"></div>
							
							<div class="m-0">
								<span className="text-gray-500 fw-bold fs-5 me-2" data-kt-translate="sign-in-head-desc">
									Not a Member yet?</span>
								<Link to="#" className="link-primary fw-bold fs-5" data-kt-translate="sign-in-head-link">
								Sign Up
								</Link>
							</div>
							
						</div>
					
						<div className="py-20">
							
							<form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="#">
							
								<div className="card-body">
								
									<div className="text-start mb-10">
										
										<h1 className="text-gray-900 mb-3 fs-3x" data-kt-translate="sign-in-title">Sign In</h1>
										
										<div className="text-gray-500 fw-semibold fs-6" data-kt-translate="general-desc">Get unlimited access & earn money</div>
									
									</div>
									
									<div className="fv-row mb-8">
									
										<input type="text" placeholder="Email" name="email" autoComplete="off" data-kt-translate="sign-in-input-email" class="form-control form-control-solid" />
									
									</div>
									
									<div className="fv-row mb-8">
										
										<input type="password" placeholder="Password" name="password" autoComplete="off" data-kt-translate="sign-in-input-password" className="form-control form-control-solid" />
									
									</div>
									
									<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
										<div></div>
										
										<Link to="reset-password.html" className="link-primary" data-kt-translate="sign-in-forgot-password">Forgot Password ?</Link>
								
									</div>
									
									<div class="d-flex flex-stack">
										
										<button id="kt_sign_in_submit" className="btn btn-primary me-2 flex-shrink-0">
										
											<span className="indicator-label" data-kt-translate="sign-in-submit">Sign In</span>
											
											<span className="indicator-progress">
												<span data-kt-translate="general-progress">Please wait...</span>
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
											</span>
											
										</button>
										
									</div>
									
								</div>
							
							</form>
							
						</div>
						
					</div>
					
				</div>
				
				<div className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat"
				style={{backgroundImage: 'url(assets/media/auth/bg12.png)'}}>

				</div>
				
			</div>

		</div>
		
	</div>
	
    </>
  );
};
export default Login;