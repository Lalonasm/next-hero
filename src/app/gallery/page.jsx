import Image from 'next/image';
import img1 from "../../../public/image/2.jpg"
import React from 'react';


export const metadata = {
    title: {
        absolute: "Gallery",

    },
    description: "Gallery Details"
}

const GalleryPage = () => {
    return (
        <div className='min-h-screen px-12 py-24'>
            <p className='mb-12 text-3xl'>Gallery Page</p>
            <Image src={img1} alt="" width={'1920'} height={'1080'} />
            <div>
                {
                    [1, 2]?.map((img) => {

                    })
                }
            </div>

        </div>
    );
};

export default GalleryPage;