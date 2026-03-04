import React from "react";

const Nav = () => {
    return (
        <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
            <a className='py-2 px-5 border rounded border-blue-200 text-blue-300' href="/create">Add New Product</a>
            <hr className='w-[80%] my-3' />
            <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>
            <ul className='w-[80%] '>
              <li className=' mb-3 flex items-center'>
                <span className='mr-2 rounded-full  w-[15px] h-[15px] bg-blue-200'></span>cat 1
              </li>
              <li className=' mb-3 flex items-center'>
                <span className='mr-2 rounded-full  w-[15px] h-[15px] bg-red-200'></span>cat 2
              </li>
              <li className=' mb-3 flex items-center'>
                <span className='mr-2 rounded-full  w-[15px] h-[15px] bg-green-200'></span>cat 3
              </li>
              
            </ul>
          </nav>

    )
}
export default Nav