import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


const Navigation = () => {
  return (
    <React.Fragment>
        <div className='border border-primary p-3' style={{heigth:"100vh"}}>
            <div>
              <Image src="/insta.PNG" alt='instagram icon' width={200} height={50}></Image>
            </div>
            {/* <div>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Explore</li>
                    <li>Messages</li>
                    <li>Notifications</li>
                    <li>Create</li>
                    <li>Profile</li>
                </ul>
            </div> */}
            <div class="list-group">
              <a href="/home" class="list-group-item list-group-item-action " aria-current="true"><i class="bi bi-house-door-fill"></i>Home</a>
              <a href="#" class="list-group-item list-group-item-action " aria-current="true">Search</a>
              <a href="#" class="list-group-item list-group-item-action " aria-current="true">Explore</a>
              <a href="/messages" class="list-group-item list-group-item-action " aria-current="true">Messages</a>
              <a href="#" class="list-group-item list-group-item-action " aria-current="true">Notifications</a>
              <a href="#" class="list-group-item list-group-item-action " aria-current="true">Create</a>
              <a href="#" class="list-group-item list-group-item-action " aria-current="true">Profile</a>
            </div>
            <div>More <i class="bi bi-house-door-fill"></i></div>
        </div>
    </React.Fragment>
  )
}

export default Navigation