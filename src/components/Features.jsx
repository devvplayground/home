import { useRef, useState } from "react"
import BentoTilt from "./BentoTilt"
 
const BentoCard =({src, title, description})=>{
    return(
        <div className="relative size-full">
            <video
             src={src}
             loop
             muted
             autoPlay
             className="absolute left-0 top-0 size-full object-cover object-center"
             />
             <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
                <div>
                    <h1 className="bento-title special-font dark:text-blue-400">
                         {title}
                    </h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
             </div>
           
        </div>
    )
}



function Features() {
  return (
    <section className='dark:bg-black bg-blue-75 pb-16 '>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p  className='font-circular-web text-lg dark:text-blue-400'>
                    Into the metagame Layer
                </p>
         
            <p className='max-w-md font-circular-web teaxt-lg dark:text-blue-50 text-black opacity-50'> 
                Immerse yourself in a rich and ever-expanding universe where a 
                vibrant array of products converge into an interconnected 
                overlay experience on your world.
            </p>
        </div>
        <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard
                src="videos/feature-1.mp4"
                title={<>radi<b>n</b>t</>}
                description="A cross-plateform metagame app, turning your activites
                across web2 and web3 games into a rewarding adventure."
            />
        </BentoTilt>
        <div className="grid h-[90vh] grid-cols-2 grid-rows-3 md:grid-rows-2 gap-7 md:h-[90vh]" >
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                <BentoCard 
                    src="videos/feature-2.mp4" 
                    title={<>zig<b>m</b>a</>}
                    description="An anime and gamining-inspired NFT collection - 
                    the IP  primed for expansion."
                />
            </BentoTilt>
            <BentoTilt  className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
                <BentoCard 
                    src="videos/feature-3.mp4"
                    title={<>n<b>e</b>xus</>}
                    description="A gamified social hub, adding a new dimension
                      of play to social interaction for web3 commuities."
                />
            </BentoTilt >
            <BentoTilt  className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                <BentoCard 
                    src="videos/feature-4.mp4"
                    title={<>az<b>u</b>l</>}
                    description="A cross-world AI Agent - elevating your
                    gameplay to e more fun and productive."
                />
            </BentoTilt >
            
        </div>
        </div>
    </section>
  )
}

export default Features