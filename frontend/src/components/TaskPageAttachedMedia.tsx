import { AttachFile, AudioFile, Description, FilePresent, InsertDriveFile, InsertPhoto, PictureAsPdf, VideoFile } from '@mui/icons-material'
import React from 'react'
import { colors } from '../Constants'
import { sampleMedia } from '../data/data'

function TaskPageAttachedMedia() {
  return (
    <>
    <div className='my-10'>
        <div className='flex flex-row gap-2'>
        <AttachFile sx={{fontSize:25,color:colors.C11,rotate:"45deg"}}/>
        <h2 className="font-bold text-[18px]">Attached Media</h2>
        </div>
        <div className='flex mt-2 flex-wrap flex-row gap-5 py-2  px-1 max-w-[90%] overflow-y-auto max-h-[300px]'>
            {
                sampleMedia.map((node:any)=>(
                    <div className='flex flex-row p-2 pr-4 justify-center items-center rounded-[4px] bg-C44 gap-2 hover:bg-[#ededed] cursor-pointer'>
                        <div className=''>
                            {node.type==="docx"?
                            <Description/>:
                             node.type==="pdf"?
                             <PictureAsPdf/>:
                             node.type==="png"||node.type==="jpeg"||node.type==="svg"?
                             <InsertPhoto/>:
                             node.type==="wav"||node.type==="mp3"?
                             <AudioFile/>:
                             node.type==="mp4"||node.type==="mkv"||node.type==="mov"?
                             <VideoFile/>:
                             <FilePresent/>
                            }
                        </div>
                        <div className=' text-[10px] max-w-[90%] break-words'>{node.fileName}</div>
                    </div>
                ))

            }
        </div>
    </div>
    </>
  )
}

export default TaskPageAttachedMedia
