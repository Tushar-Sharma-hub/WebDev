import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
function Pagination() {
    const {page,totalPages,handlePageChange}=useContext(AppContext);
    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>{
                    page>1 && (
                        <button onClick={()=>handlePageChange(page-1)} className='border p-2 rounded-2xl bg-sky-200'>Previous</button>
                    )
                }
                {
                    page<totalPages && (
                        <button onClick={()=>handlePageChange(page+1)} className='border p-2 rounded-2xl bg-sky-200'>Next</button>
                    )
                }
            </div>
            <p>
                Page {page} of {totalPages}
            </p>
        </div>
    )
}

export default Pagination
