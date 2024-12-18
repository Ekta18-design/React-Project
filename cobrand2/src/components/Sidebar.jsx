
import { Link } from 'react-router-dom';

function Sidebar(){
 
    return(
    <>
      
   	<div id="kt_aside" class="aside pt-7 pb-4 pb-lg-7 pt-lg-17" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
   
        <div class="aside-logo flex-column-auto px-9 mb-9 mb-lg-17 mx-auto" id="kt_aside_logo">
          
          <Link to="#">
            <img alt="Logo" src="assets/media/logos/default.svg" class="h-30px logo theme-light-show" />
            <img alt="Logo" src="assets/media/logos/default-dark.svg" class="h-30px logo theme-dark-show" />
          </Link>
        
        </div>
      
        <div class="aside-menu flex-column-fluid ps-3 ps-lg-5 pe-1 mb-9" id="kt_aside_menu">
      
          <div class="w-100 hover-scroll-y pe-2 me-2" id="kt_aside_menu_wrapper" data-kt-scroll="true" 
          data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" 
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_user, #kt_aside_footer" 
          data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper" data-kt-scroll-offset="0">
          
            <div class="menu menu-column menu-rounded menu-sub-indention fw-semibold" id="#kt_aside_menu" data-kt-menu="true">
          
              <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                
                <Link class="menu-link" to="/">
                
                  <span class="menu-icon">
                     <i class="ki-duotone ki-home-2 fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </span>
                  <span class="menu-title">Dashboards</span>
                  
                </Link>
                
                <div class="">
                
                  <div class="menu-item">
                  
                    <Link class="menu-link" to="/myprofile">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">My Profile</span>
                    </Link>
                    
                  </div>
                 <div class="menu-item">
                  
                  <Link class="menu-link" to="/partnerprofile">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Partner Profile</span>
                  </Link>
                  
                </div>
                  
                  <div class="menu-item">
                  
                    <Link class="menu-link" to="/mydownloads">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">My Downloads</span>
                    </Link>
                    
                  </div>
                  
                  <div class="menu-item">
                    
                    <Link class="menu-link" to="/contentmaster">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Content Master</span>
                    </Link>
            
                  </div>
                  
                  <div class="menu-item">
                  
                    <Link class="menu-link" to="/usermaster">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">User Master</span>
                    </Link>
                    
                  </div>
                  
                  <div class="menu-item">
                    
                    <Link class="menu-link" to="/setting">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Settings</span>
                    </Link>
                    
                  </div>
                  <div class="menu-item">
                    
                    <Link class="menu-link" to="/cobrand">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">Cobrand</span>
                    </Link>
                    
                  </div>
                
                </div>
                
              </div>
           
            </div>
            
          </div>
          
        </div>
        <div class="aside-footer flex-column-auto px-6 px-lg-9" id="kt_aside_footer">
					
					<div class="d-flex flex-stack ms-7">
							
            <Link to="/login" class="btn btn-sm btn-icon btn-active-color-primary btn-icon-gray-600 btn-text-gray-600" >
              <i class="ki-duotone ki-entrance-left fs-1 me-2">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              
              <span class="d-flex flex-shrink-0 fw-bold">Log Out</span>
              
            </Link>
						</div>
						
					</div>
        
      </div>
      </>
  );

};

export default Sidebar;