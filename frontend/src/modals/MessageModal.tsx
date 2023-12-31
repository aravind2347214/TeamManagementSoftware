import React from 'react'

function MessageModal(props:any) {
    const { heading, content, buttonText, onClose} = props;
  return (
    <>
    <div className='top-0 left-0 absolute w-[100vw] h-[100vh] bg-[#0000005b] flex justify-center items-center'>
      <div className='bg-white rounded-[8px] p-10 w-[500px]'>
        <div className='font-bold text-[22px] text-[#012B39]'>
          {heading}
        </div>
        <div className='my-1 text-[14px]'>
          <p>{content}</p>
        </div>
        <div className='flex justify-end mt-2'>
          <button className={`bg-[#012b39f2] hover:bg-[#012B39] rounded-[8px] text-white font-bold text-[14px] py-2 px-5`} onClick={onClose}>{buttonText}</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MessageModal
