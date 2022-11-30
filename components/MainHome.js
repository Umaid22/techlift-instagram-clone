import React from 'react'
import FeedCenter from './FeedCenter.js'
import Navigation from './Navigation.js'
import AccountDetailsSidebar from './AccountDetailsSidebar.js'

const MainHome = () => {
  return (
    <React.Fragment>
        <div>
            <Navigation/>
            <FeedCenter/>
            <AccountDetailsSidebar/>

        </div>

    </React.Fragment>
  )
}

export default MainHome