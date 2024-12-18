
import { Link } from 'react-router-dom';

const Logout = props => {
  const {onClickLogout} = props
  return (
    <Link to="/Login" class="btn btn-sm btn-icon btn-active-color-primary btn-icon-gray-600 btn-text-gray-600" >
              <i class="ki-duotone ki-entrance-left fs-1 me-2">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              
              <span class="d-flex flex-shrink-0 fw-bold" onClick={onClickLogout} >Log Out</span>
              
            </Link>
  )
}

export default Logout;
