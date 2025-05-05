import  { useEffect, useRef, useState } from 'react'
import Button from './Button';
import {Link,} from 'react-router-dom'
import {useWindowScroll} from 'react-use'
import gsap from 'gsap';
import ThemeToggle from '../Context/ThemeToggle';


// const navItems=['Home','Controls', 'About','Contact'];

const navItems=[
    {
        name:"Home",
        path:"/",   
    },
    {
        name:"Controls",
        path:"/controls",   
    },
    {
        name:"About",
        path:"/about",  
    },
    {
        name:"Contact",
        path:"/contact", 
    }
    
]

function Navbar() {

    const [isAudioPlaying, setIsAudioPlaying]= useState(false);
    const [isIndicatorActive, setIsindicatorActive]= useState(false);

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible]= useState(true);

    const navcontainerRef= useRef(null);
    const audioElementRef= useRef(null);

    const {y: currentScrollY}= useWindowScroll();


    useEffect(()=>{
        if(currentScrollY==0){
            setIsNavVisible(true);
            navcontainerRef.current.classList.remove('floating-nav');
        }
        else if(currentScrollY>lastScrollY){
            setIsNavVisible(false);
            navcontainerRef.current.classList.add('floating-nav');
        }
        else if(currentScrollY<lastScrollY){
            setIsNavVisible(true);
            navcontainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    },[currentScrollY, lastScrollY ])
     
    useEffect(()=>{
        gsap.to(navcontainerRef.current,{
            y:isNavVisible?0:-100,
            opacity:isNavVisible?1:0,
            duration:0.2,
        })
    }, [isNavVisible])
 
    const toggleAudioindicator =()=>{
        setIsAudioPlaying((prev)=> !prev);
        setIsindicatorActive((prev)=> !prev);
    }
    useEffect(()=>{
        if(isAudioPlaying){
            audioElementRef.current.play();
        }
        else{
            audioElementRef.current.pause();
        }
    },[isAudioPlaying])

  return (
    <div
        ref={navcontainerRef}
        className='fixed inset-x-0 top-4 z-50 h-16 border-none
         transition-all duration-700 sm:inset-x-6'
    > 
        <header className='absolute top-0 w-full-translate-y-1/2'>
            <nav className='flex size-full  w-[95vw] items-center justify-between p-3 mr-2'>
                <div className='flex items-center gap-7'>
                    <div className='rounded-full bg-black '>
                        <Link to="/">
                          <img src="/img/logo.png" alt="logo" className='w-10' />
                        </Link>
                    </div>
                    
                    <Link to="/login">
                         {/* <Button id='singup' title='login' ContainerClass='!bg-yellow-300 flex-center gap-1' />
                             <span className="text-cyan-400"> login</span> */}
                        <Button
                        id='product-button'
                        title='GetStarted'
                        ContainerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                    />     
                    </Link>
                </div>
                <div className='flex h-full items-center'> 
                    <div className="hidden md:flex gap-6">
                                        {navItems.map((item) => (
                                            <li key={item.name} className="list-none">
                                            <Link
                                                to={item.path}
                                                className="nav-hover-btn text-gray-300 hover:text-white transition"
                                            >
                                                {item.name}
                                            </Link>
                                            </li>
                                        ))}
                      </div>
                    {/* <ThemeToggle/> */}
                    <button 
                        className='ml-10 flex it ems-center space-x-0.5'
                        onClick={toggleAudioindicator}
                    > 
                        <audio 
                            ref={audioElementRef}
                            className='hidden'
                            src="audio/loop.mp3"
                            loop
                            />
                                {[1,2,3,4].map((bar)=>(
                                    <div key={bar} className={`indicator-line ${isIndicatorActive ?'active':' ' } `} style={{animationDelay:`${bar*0.1}s`}}/>
                                ))}
                    </button>
                </div>
            </nav>
        </header>
    </div> 
  )
}

export default Navbar