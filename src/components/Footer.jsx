import  {FaDiscord,FaTwitter,FaGithub,FaTwitch, FaYoutube} from 'react-icons/fa'
const links=[
  { href:'https://discord.gg/jV4yYut5', icon:<FaDiscord/>},
  { href:'https://x.com/devvplayground', icon:<FaTwitter/>},
  { href:'https://github.com/devvplayground', icon:<FaGithub/>},
  { href:'https://www.youtube.com/@devvplayground', icon:<FaYoutube/>},

]

function Footer() {
  return (
    <footer className='w-screen dark:bg-blue-400 bg-blue-700 py-4 text-black '>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 pr-8 md:flex-row'>
          <p className='text-center text-sm md:text-left'>
            &copy; DevPlayground 2024. All rights reserved
          </p>
          <div className='flex justify-center gap-4 md:justify-start'>
            { links.map((link,ind)=>(
              <a  key={ind} href={link.href} target="_blank"
                  rel="noopener noreferrer"
                className="text-black transition-colors duration-500 ease-in-out hover:text-white"
              >
                  {link.icon}
              </a>
            ))
            }
          </div>
          <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
              Privacy Policy
          </a>
        </div>
    </footer>
  )
}

export default Footer
