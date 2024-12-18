import React from 'react'
import Sidebar from '../components/Sidebar';

const Cobrand = () => {
  return (
    <>
		<Sidebar></Sidebar>
    
		<div class="d-flex flex-column flex-root">
		
			<div class="page d-flex flex-row flex-column-fluid">
				
				
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
				
					<div id="kt_header" class="header">
					
						<div class="container-fluid d-flex align-items-center flex-wrap justify-content-between" id="kt_header_container">
							
							<div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 pb-5 pb-lg-0 pt-7 pt-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
								
								<h1 class="d-flex flex-column text-gray-900 fw-bold my-0 fs-1">Cobrand</h1>
								
								<ul class="breadcrumb breadcrumb-dot fw-semibold fs-base my-1">
									<li class="breadcrumb-item text-muted">
										<a href="index.html" class="text-muted text-hover-primary">Home</a>
									</li>
									<li class="breadcrumb-item text-muted">Cobrand</li>
									
								</ul>
								
							</div>
							
							<div class="d-flex d-lg-none align-items-center ms-n4 me-2">
								
								<div class="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
									<i class="ki-duotone ki-abstract-14 fs-1 mt-1">
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
								</div>
								
								<a href="index.html" class="d-flex align-items-center">
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
										
										<div class="row gy-5 g-xl-10">
										
										<div class="col-xl-8 mb-5 mb-xl-10">
											
											<div class="card card-flush h-xl-100">
									
										<div class="card-body pt-2">
											<form action="#" class="form mb-15" method="post" id="kt_careers_form">
												
												<div class="row mb-5">
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Select Creative File</label>
														
														<input type="text" id="companyname" class="form-control form-control-solid" placeholder="" name="companyname" />
														
													</div>
													
													<div class="col-md-6 fv-row">
													
														<label class="fs-5 fw-semibold mb-2">ARN</label>
														
														<input type="text" id="arn" class="form-control form-control-solid" placeholder="" name="arn" />
													
													</div>
												
												</div>
												
												<div class="row mb-5">
												
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">File Name</label>
														
														<input type="text" id="filename" class="form-control form-control-solid" placeholder="" name="filename" />
														
													</div>
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Email</label>
														
														<input type="text" id="email" class="form-control form-control-solid" placeholder="" name="email" />
														
													</div>
												
												</div>
												
												<div class="row mb-5">
													
													<div class="col-md-6 fv-row">
												
														<label class="fs-5 fw-semibold mb-2">Phone</label>
														
														<input type="text" id="phone" class="form-control form-control-solid" placeholder="" name="phone" />
														
													</div>
													
													<div class="col-md-6 fv-row">
													
														<label class="fs-5 fw-semibold mb-2">Logo/Photo</label>
														
														<input type="file" id="" class="form-control form-control-solid" placeholder="" name="" />
														
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
													
													<span class="indicator-label">Cobrand</span>
												
													<span class="indicator-progress">Please wait... 
													<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													
												</button>
												<button type="submit" class="btn btn-primary" id="kt_careers_submit_button">
													
													<span class="indicator-label">Share</span>
													
													<span class="indicator-progress">Please wait... 
													<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													
												</button>
												<button type="submit" class="btn btn-warning" id="kt_careers_submit_button">
													
													<span class="indicator-label">Download</span>
													
													<span class="indicator-progress">Please wait... 
													<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													
												</button>
												
											</form>
											
										</div>
										
									</div>
								
								</div>
								
										<div class="col-xl-4 mb-xl-10">
										
											<div class="card h-md-100" dir="ltr">
											
											<div class="card-body d-flex flex-column">
											
											<div class="mb-2">											
												
												<div class="text-center">
													<img src="assets/media/bg1.jpg" style={{height:'500px', width:'100%'}} alt="" />
													</div>
												
											</div>
											
										</div>
										
									</div>
									
								</div>
								
							</div>
							
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

export default Cobrand;