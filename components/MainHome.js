import React from 'react'
import FeedCenter from './FeedCenter.js'
import Navigation from './Navigation.js'
import AccountDetailsSidebar from './AccountDetailsSidebar.js'
import 'bootstrap/dist/css/bootstrap.min.css';


const MainHome = () => {
  return (
    <React.Fragment>
      <div className='container mt-2'>
        <div className='d-flex justify-content-between'>

          <div className=''>
            <Navigation/>
          </div>

          <div className=' d-flex justify-content-center'>
            <FeedCenter/>
          </div>

          <div className=''>
            <AccountDetailsSidebar/>
          </div>

        </div>
      </div>

    </React.Fragment>
  )
}

export default MainHome