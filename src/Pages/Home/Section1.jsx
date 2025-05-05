import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import AnimatedTitle from '../../components/AnimatedTitle'

function Section1() {

    useGSAP(()=>{
        const clipAnimation= gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start:'center center',
                end:'+=800 center',
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            }
        })
        clipAnimation.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius:0,
        })
    })
  return (
    <div className='min-h-screen w-screen dark:bg-black bg-blue-75'>
        <div className='relative mb-8  flex flex-col items-center gap-5'>
            <h2 className='font-gernal text-sm uppercase md:text-[10px]'> 
                Welcome to DevPlayGround
            </h2>
            <AnimatedTitle title="Disc<b>o</b>ver the World's <br/> largest shared <b>a</b>dventure" containerClass='mt-5 dark:!text-blue-400 !text-black text-center'/>
            
            <div className='about-subtext'>
                <p>The Game of Games begins-your life, now an epic MMORPG</p>
                <p>Dev PlayGround unites every player from countless games and plateforms</p>
            </div>
        </div>
        <div className='h-dvh w-screen ' id='clip'>
            <div className='mask-clip-path about-image'>
                <img src="img/about.png"
                 alt="background" 
                 className='absolute left-0 top-0 size-full object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default Section1;