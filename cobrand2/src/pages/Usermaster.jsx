import React from "react";
import Sidebar from "../components/Sidebar";
const Usermaster = () =>{
  return(
    <>
		<Sidebar></Sidebar>
   
		<div class="d-flex flex-column flex-root">
			
			<div class="page d-flex flex-row flex-column-fluid">
			
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					
					<div id="kt_header" class="header">
						
						<div class="container-fluid d-flex align-items-center flex-wrap justify-content-between" id="kt_header_container">
							
							<div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 pb-5 pb-lg-0 pt-7 pt-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
								
								<h1 class="d-flex flex-column text-gray-900 fw-bold my-0 fs-1">User Master</h1>
								
								<ul class="breadcrumb breadcrumb-dot fw-semibold fs-base my-1">
									<li class="breadcrumb-item text-muted">
										<a href="index.html" class="text-muted text-hover-primary">Home</a>
									</li>
									<li class="breadcrumb-item text-muted">User Master</li>
									
								</ul>
								
							</div>
							
							<div class="d-flex d-lg-none align-items-center ms-n4 me-2">
								
								<div class="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
									<i class="ki-duotone ki-abstract-14 fs-1 mt-1">
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
								</div>
							
								<a href="#" class="d-flex align-items-center">
									<img alt="Logo" src="assets/media/logos/default-small.svg" class="h-30px" />
								</a>
								
							</div>
						
						</div>
						
					</div>
					
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						
						<div class="container-fluid" id="kt_content_container">
							
							<div class="card">
								
								<div class="card-body p-lg-17">
									
									<div class="d-flex flex-column flex-lg-row mb-17">
										
										<div class="flex-lg-row-fluid me-0">
											
											<form action="#" class="form mb-15" method="post" id="kt_careers_form">
											
												<div class="row mb-5">
												
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">User Id</label>
														
														<input type="text" id="id" class="form-control form-control-solid" placeholder="" name="id" />
														
													</div>
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">ARN Number</label>
														
														<input type="text" id="arnnumber" class="form-control form-control-solid" placeholder="" name="arnnumber" />
														
													</div>
													
												</div>
												
												<div class="row mb-5">
												
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Full Name</label>
														
														<input type="text" id="fullname" class="form-control form-control-solid" placeholder="" name="fullname" />
														
													</div>
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Email</label>
														
														<input type="text" id="email" class="form-control form-control-solid" placeholder="" name="email" />
														
													</div>
													
												</div>
												
												<div class="row mb-5">
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Password</label>
														
														<input type="text" id="password" class="form-control form-control-solid" placeholder="" name="password" />
														
													</div>
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Phone</label>
														
														<input type="text" id="phone" class="form-control form-control-solid" placeholder="" name="phone" />
														
													</div>
												
												</div>
												
												<div class="row mb-5">
												
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2"> Role </label>
														
														<select id="role" class="form-control form-control-solid" placeholder="" name="role" >
														
														<option value="admin">Admin</option>
														<option value="user">User</option>
														<option value="specialuser">Special User</option>
														
														</select>
														
													</div>
													
												</div>
												
												<div class="row mb-5">
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">isActive</label>
													
														<div class="form-check form-check-solid form-switch form-check-custom fv-row">
														<input class="form-check-input w-45px h-30px" type="checkbox" id="isActive" checked="checked" />
														</div>
														
													</div>
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">isDeleted</label>
													
														<div class="form-check form-check-solid form-switch form-check-custom fv-row">
														
														{/*<label class="form-check-label" for="allowmarketing"></label>*/}
														<input style={{marginLeft:'15px'}} class="form-check-input w-45px h-30px" type="checkbox" id="isDeleted" checked="checked" />
														</div>
												
													</div>
													
												</div>
												
												<div class="separator mb-8"></div>
												
												<button type="submit" class="btn btn-primary" id="kt_careers_submit_button">
													
													<span class="indicator-label">Save</span>
													
													<span class="indicator-progress">Please wait... 
													<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													
												</button>
												
											</form>
										
											</div>
										
									</div>
									
								</div>
								
							</div>
							
						</div>
						
					</div>
					
					<div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
						
						<div class="container-fluid d-flex flex-column flex-md-row flex-stack">
							
							<div class="text-gray-900 order-2 order-md-1">
								<span class="text-gray-500 fw-semibold me-1">Created by</span>
								<a href="#" target="_blank" class="text-muted text-hover-primary fw-semibold me-2 fs-6"></a>
							</div>
							
							</div>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<i class="ki-duotone ki-arrow-up">
				<span class="path1"></span>
				<span class="path2"></span>
			</i>
		</div>
	
    </>
  );
};
export default Usermaster;