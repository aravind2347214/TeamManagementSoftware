import { Close } from '@mui/icons-material';
import React from 'react'

function EditTaskModal(props:any) {
    const{setEditTaskModal,data}=props;

    // function to close this modal
    const handleModalClose=()=>{
        setEditTaskModal(false)    
    }
  return (
<div className='top-0 left-0 absolute w-[100vw] h-[100vh] bg-[#00000054] flex justify-center items-center'>
    <div className='bg-C55 rounded-[8px] p-5 w-[700px]' >
    <div className='flex flex-row items-center justify-between'>
      <div className='font-bold text-[20px] text-C11'>
        Edit Task
      </div>
      <button className='cursor-pointer'
      onClick={handleModalClose}
      >
        <Close sx={{fontSize:20,fontWeight:800}}/>
      </button>
      </div>
      <div className='flex justify-end gap-4 mt-2'>
      <button className={` hover:bg-[#012b3927] rounded-[8px] text-C11 font-bold text-[14px] py-2 px-5`} onClick={handleModalClose}>Cancel</button>
        <button className={`bg-[#012b39f2] hover:bg-[#012B39] rounded-[8px] text-white font-bold text-[14px] py-2 px-5`} >Save</button>
      </div>
    </div>
  </div>
  )
}

export default EditTaskModal