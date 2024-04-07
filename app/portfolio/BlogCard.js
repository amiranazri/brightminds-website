import React from 'react'
import Image from "next/image";

function BlogCard({ imageSrc, blogUrl, blogSummary }) {
  return (
    <div className="relative w-[300px] h-[400px] overflow-hidden flex-shrink-0 m-2 border">
        <div className="relative w-[300px] h-[150px] overflow-hidden flex-shrink-0 m-2">
            {/* Image */}
            <Image src={imageSrc} fill objectFit='contain' />
        </div>
        <div className='w-full h-[230px] absolute z-20 flex flex-col items-center justify-end p-3 text-md'>
            {/* Content */}
            <div className='mb-2'>
                {blogSummary}
            </div>
            <a
                className="text-white bg-[#19598F] hover:bg-yellow-300 hover:text-black w-[150px] p-1 cursor-pointer text-center"
                target='_blank'
                href={blogUrl}
                rel="noopener noreferrer"
            >
                READ MORE
            </a>
        </div>
    </div>
  )
}

export default BlogCard