import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';


function Dashboard (){
  return (
   <>
		<Sidebar></Sidebar>
  
		<div class="d-flex flex-column flex-root">
			
			<div class="page d-flex flex-row flex-column-fluid">
			
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					
					<div id="kt_header" class="header">
					
						<div class="container-fluid d-flex align-items-center flex-wrap justify-content-between" id="kt_header_container">
						
							<div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 pb-5 pb-lg-0 pt-7 pt-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
								
								<h1 class="d-flex flex-column text-gray-900 fw-bold my-0 fs-1">Dashboard</h1>
								
								<ul class="breadcrumb breadcrumb-dot fw-semibold fs-base my-1">
									<li class="breadcrumb-item text-muted">
										<a href="index.html" class="text-muted text-hover-primary">Home</a>
									</li>
									<li class="breadcrumb-item text-muted">Dashboard</li>
									
								</ul>
								
							</div>
							
							<div class="d-flex d-lg-none align-items-center ms-n4 me-2">
								
								<div class="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
									<i class="ki-duotone ki-abstract-14 fs-1 mt-1">
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
								</div>
								
								<Link to="/" class="d-flex align-items-center">
									<img alt="Logo" src="assets/media/logos/default-small.svg" class="h-30px" />
								</Link>
								
							</div>
						
						</div>
						
					</div>
					
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						
						<div class="container-fluid" id="kt_content_container">
							
							<div class="card">
								
								<div class="card-body p-lg-17">
									
									<div class="d-flex flex-column flex-lg-row mb-17">
										
										<div class="flex-lg-row-fluid me-0">
										
								<div class="row g-5 g-xl-8">
									<div class="col-xl-3">
									
										<Link to="#" class="card hoverable card-xl-stretch mb-xl-8" style={{backgroundColor:'#ffd166'}}>
											
											<div class="card-body">
												<i class="ki-duotone ki-basket text-gray-100 fs-2x ms-n1">
													245
													<span class="text-end fw-semibold" style={{marginLeft:"40%", backgroundColor:"green",fontSize:"20px"}}>+0.02%</span>

												</i>
												<div class="text-gray-100 fw-bold fs-2 mb-2 mt-5">No of Distributors</div>
												
											</div>
											
										</Link>
										
									</div>
									<div class="col-xl-3">
										
										<Link to="#" class="card hoverable card-xl-stretch mb-xl-8" style={{backgroundColor:'#06d6a0'}}>
											
											<div class="card-body">
												<i class="ki-duotone ki-element-11 text-white fs-2x ms-n1">
													243
													<span class="text-end fw-semibold" style={{marginLeft:'40%',color:'green',fontSize:'20px'}}>+0.05%</span>
												</i>
												<div class="text-white fw-bold fs-2 mb-2 mt-5">Total Views</div>
												
											</div>
											
										</Link>
										
									</div>
									<div class="col-xl-3">
										
										<Link to="#" class="card bg-gray-900 hoverable card-xl-stretch mb-5 mb-xl-8" style={{backgroundColor:"073b4c"}}>
											
											<div class="card-body">
												<i class="ki-duotone ki-chart-simple text-gray-100 fs-2x ms-n1">
													120
													<span class="text-end fw-semibold" style={{marginLeft:"60%",backgroundColor:"red",fontSize:"20px"}}>-12%</span>
												</i>
												<div class="text-gray-100 fw-bold fs-2 mb-2 mt-5">Total <br/>Co-branding</div>
												
											</div>
											
										</Link>
										
									</div>
									<div class="col-xl-3">
										
										<Link to="#" class="card hoverable card-xl-stretch mb-xl-8" style={{backgroundColor: '#118ab2'}}>
											
											<div class="card-body">
												<i class="ki-duotone ki-basket text-gray-100 fs-2x ms-n1">
													89
													<span class="text-end fw-semibold" style={{marginLeft:"90%",backgroundColor:"green",fontSize:"20px"}}>+1%</span>
												</i>
												<div class="text-gray-100 fw-bold fs-2 mb-2 mt-5">Total Ads Posted</div>
												
											</div>
											
										</Link>
										
									</div>
									
								</div>
								
								<div class="col-xxl-8  mb-xxl-10">
								
									<div class="card h-md-100">
										
										<div class="card-header border-0 pt-5">
											<h3 class="card-title align-items-start flex-column">
												<span class="card-label fw-bold fs-3 mb-1">Data</span>
												
											</h3>
											<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Add Media File">
												<a href="#" class="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
												<i class="ki-duotone ki-plus fs-2"></i>Add New Media File</a>
											</div>
										</div>
										
										<div class="card-body py-3">
											
											<div class="table-responsive">
												
												<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
												
													<thead>
														<tr class="fw-bold text-muted">
															<th class="w-25px">
																<div class="form-check form-check-sm form-check-custom form-check-solid">
																	<input class="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-9-check" />
																</div>
															</th>
															<th class="min-w-100px text-gray-900">File Id</th>
															<th class="min-w-120px text-gray-900">Preview</th>
															<th class="min-w-100px text-gray-900">File Type</th>
															<th class="min-w-150px text-gray-900">Description</th>
															<th class="min-w-100px text-gray-900">Actions</th>
														</tr>
													</thead>
													
													<tbody>
														<tr>
															<td>
																<div class="form-check form-check-sm form-check-custom form-check-solid">
																	<input class="form-check-input widget-9-check" type="checkbox" value="1" />
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center">
																	
																		<div class="d-flex justify-content-start flex-column">
																		
																		<span class="text-muted fw-semibold text-muted d-block fs-7">PPD1125</span>
																	</div>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center">
																	<div class="symbol symbol-45px me-5">
																		<img src="assets/media/1.jpg" alt="" />
																	</div>
																	<div class="d-flex justify-content-start flex-column">
																		{/*<a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">Jessie Clarcson</a>*/}
																		<span class="text-muted fw-semibold text-muted d-block fs-7">AAA</span>
																	</div>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center">
																	
																		<div class="d-flex justify-content-start flex-column">
																		
																		<span class="text-muted fw-semibold text-muted d-block fs-7">PDF</span>
																	</div>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center">
																	
																		<div class="d-flex justify-content-start flex-column">
																		
																		<span class="text-muted fw-semibold text-muted d-block fs-7">SSSSSS</span>
																	</div>
																</div>
															</td>
															<td>
																<div class="d-flex flex-shrink-0">
																	<Link to="#" class="btn btn-icon btn-bg-light btn-color-gray btn-sm me-1">
																		<i class="fa fa-eye fs-2">
																			<span class="path1"></span>
																			<span class="path2"></span>
																		</i>
																	</Link>
																	<Link to="#" class="btn btn-icon btn-bg-light btn-color-primary btn-sm me-1">
																		<i class="ki-duotone ki-pencil fs-2">
																			<span class="path1"></span>
																			<span class="path2"></span>
																		</i>
																	</Link>
																	<Link href="#" class="btn btn-icon btn-bg-light btn-color-danger btn-sm">
																		<i class="ki-duotone ki-trash fs-2">
																			<span class="path1"></span>
																			<span class="path2"></span>
																			<span class="path3"></span>
																			<span class="path4"></span>
																			<span class="path5"></span>
																		</i>
																	</Link>
																</div>
															</td>
														</tr>
														
													</tbody>
													
												</table>
												
												<ul class="pagination">
															<li class="page-item previous"><a href="#" class="page-link">
															<i class="previous"></i></a></li>
															<li class="page-item "><a href="#" class="page-link">1</a></li>
															<li class="page-item active"><a href="#" class="page-link">2</a></li>
															<li class="page-item "><a href="#" class="page-link">3</a></li>
															<li class="page-item next"><a href="#"  class="page-link">
															<i class="next"></i></a></li>
												</ul>
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
								<Link to="#" target="_blank" class="text-muted text-hover-primary fw-semibold me-2 fs-6">
								</Link>
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
		
		<div class="modal fade" id="kt_modal_invite_friends" tabIndex="-1" aria-hidden="true">
			
			<div class="modal-dialog mw-650px">
				
				<div class="modal-content">
					
					<div class="modal-header pb-0 border-0 justify-content-end">
						
						<div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i class="ki-duotone ki-cross fs-1">
								<span class="path1"></span>
								<span class="path2"></span>
							</i>
						</div>
					
					</div>
					
					<div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
						
						<div class="text-center mb-13">
							
							<h1 class="mb-3">Add Media File</h1>
							
						</div>
						
						<div class="separator d-flex flex-center mb-8">
							
						</div>
						
						<div class="mb-10">
							
							<div class="mh-300px scroll-y me-n7 pe-7">
								
								<div class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
									
									<div class="d-flex align-items-center">
										<form action="#" class="form mb-15" method="post" id="kt_careers_form">
								
												<div class="row mb-5">
												
													<div class="col-md-6 fv-row">
													
														<label class="fs-5 fw-semibold mb-2">File Id</label>
														
														<input type="text" id="id" class="form-control form-control-solid" placeholder="" name="id" />
														
													</div>
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Image</label>
														
														<input type="file" id="id" class="form-control form-control-solid" placeholder="" name="id" />
													
													</div>
													
												</div>
												
												<div class="row mb-5">
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">File Type</label>
														
														<input type="text" id="filetype" class="form-control form-control-solid" placeholder="" name="filetype" />
														
													</div>
													
													<div class="col-md-6 fv-row">
														
														<label class="fs-5 fw-semibold mb-2">Description</label>
														
														<input type="text" id="description" class="form-control form-control-solid" placeholder="" name="description" />
														
													</div>
													
												</div>
												
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
				
			</div>
			
		</div>
		
   </>
  );
};

export default Dashboard;