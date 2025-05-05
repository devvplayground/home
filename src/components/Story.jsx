
import { useRef } from "react"
import AnimatedTitle from "./AnimatedTitle.jsx"
import RoundedCorner from "./RoundedCorner.jsx";
import gsap from "gsap";

function Story() {

    const frameRef= useRef("null");

    const handleMouseLeave=()=>{
        const element= frameRef.current
        gsap.to(element,{
            duration:0.3,
            rotateX:0,
            rotateY:0,
            ease:'power1.inOut'
        })
    }
    const handleMouseMove = (e)=>{
        const {clientX, clientY}= e;
        const element= frameRef.current;

        if(!element) return;

        const rect= element.getBoundingClientRect();
        const x= clientX - rect.left;
        const y= clientY - rect.top;

        const centerX= rect.width/2;
        const centerY= rect.height/2;

        const rotateX= ((y-centerY)/centerY)* -10;
        const rotateY= ((x-centerX)/centerX)* 10;

        gsap.to(element,{
            duration:0.3,
            rotateX, rotateY,
            transformPerspective:500,
            ease:'power1.inOut'
        })

    }
  return (
    <section  className='min-h-dvh w-screen bg-slate-4060  dark:text-blue-400 text-black'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className=' font-general text-sm uppercase md:text-[10px]'>
                The multiversal ip world
            </p>
            <div className='relative size-full'>
                <AnimatedTitle
                    title='The st<b>o</b>ry of <br/> a hidden real<b>m</b>'
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 dark:!text-blue-400  "
                />
                <div className="story-img-container">
                <div className="story-img-mask">
                    <div className="story-img-content">
                        <img 
                         ref={frameRef}
                         onMouseLeave={handleMouseLeave}
                         onMouseUp={handleMouseLeave}
                         onMouseEnter={handleMouseLeave}
                         onMouseMove={handleMouseMove}
                         src="/img/entrance.png" 
                         alt="enterance" 
                         className="object-contain"
                        />
                    </div>
                </div>
                <RoundedCorner/>
            </div>
            </div>
            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
                <p className="mt-3 max-w-sm text-center font-circular-web dark:text-blue-400 md:text-start">
                Our mission is to redefine gaming by integrating technology and
              creativity, allowing gamers to connect, compete, and grow together.
                </p>
            </div>
        </div>

        </div>
       
    </section>
  )
}

export default Story