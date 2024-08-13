import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className='bg-slate-800 flex flex-col md:flex-row justify-between items-center p-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div>
                        <span className='m-2 font-serif font-bold text-2xl text-white' >{props.title}</span>
                    </div>
                    <div>
                        <NavLink to='/' className={({isActive}) => `m-2 ${isActive ? 'text-orange-600 text-lg font-bold' : 'text-gray-500 text-sm'} `} >{props.home}</NavLink>
                        <NavLink to='/about' className={({isActive}) => `m-2 ${isActive ? 'text-orange-600 text-lg font-bold' : 'text-gray-500 text-sm'} `} >{props.about}</NavLink>
                        <NavLink to='/user/1' className={({isActive}) => `m-2 ${isActive ? 'text-orange-600 text-lg font-bold' : 'text-gray-500 text-sm'} `} >{props.user}</NavLink>
                        {/* <NavLink to='/gitprofile' className={({isActive}) => `m-2 ${isActive ? 'text-orange-600 text-lg font-bold' : 'text-gray-500 text-sm'} `} >{props.git}</NavLink> */}
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" onClick={props.changeMode} />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="mx-3 text-sm font-medium text-white dark:text-white">{props.mode === 'white'? "Light" : "Dark"}</span>
                        </label>
                    </div>
                    <input type='search' placeholder='Search' className='font-mono text-sm'></input>
                    <button className='bg-red-950 text-white px-2 justify-center items-center font-serif text-sm hover:bg-red-600' >Search</button>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string,
    about: PropTypes.string,
}
Navbar.defaultProps = {
    title: 'Title',
    home: 'Home',
    about: 'About',
    user : 'User',
    git: 'Git Profile'
}