import React from 'react';
import './usermaster.css';


const Usermaster=() => {
    return(
     <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h5 className='mt-2'>Form
            </h5>
            <p className='text-success'>{}</p>
            <form>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label className='form-label'>UserName</label>
                    <input type='text' name='username' className='form-control'/>
                  </div>
                </div>
              </div>
            </form>
                

          </div>
        </div>

      </div>
     
     </>
    ) 

}

export default Usermaster;