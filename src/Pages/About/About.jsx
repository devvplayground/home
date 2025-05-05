import BentoTilt from '../../components/BentoTilt';
import Story from '../../components/Story';

function About() {
  return (
    <div className="font-sans text-white dark:bg-gradient-to-b from-[#0f1117] to-[#1a1f2b] bg-blue-75">
      {/* Hero Section */}
      <BentoTilt>
        <section
          className="relative min-h-screen flex items-center justify-center text-center bg-white dark:bg-black pd-10"
        >
          <div className="z-10 max-w-3xl px-6 sm:px-10 ">
            <h1 className=" special-font hero-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-4 dark:text-blue-400 text-black">
              Welcome to <span ><b>D</b>evPlayground</span>
            </h1>
           
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
              DevPlayground is a revolutionary gaming platform combining advanced
              technology, immersive gameplay, and community-driven engagement.
              With cutting-edge features, we deliver a seamless gaming experience
              like never before.
            </p>
            <br />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              DevPlayground is an innovative platform focused on creating
              next-level gaming experiences. It offers multiplayer tournaments,
              real-time AI assistance, a thriving community forum, and a dynamic
              leaderboard system. With the help of Unreal Engine for advanced
              graphics and the MERN stack for scalable backend development, we
              ensure the highest quality for our players.
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </section>
      </BentoTilt>
      <Story/>

      {/* Team Section */}
      <section className="min-h-screen flex flex-col justify-center text-center dark:bg-black bg-blue-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="special-font hero-heading text-2xl sm:text-3xl md:text-6xl font-semibold dark:text-blue-400 text-black mb-10">
          Meet the Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: 'Akshat Soni',
              role: 'Team Lead & Unreal Dev',
              desc: 'Akshat specializes in Unreal Engine development and leads the team with creative gameplay mechanics and state-of-the-art visuals.',
              img: '/img/Akshat.avif',
            },
            {
              name: 'Arshu Hamid',
              role: 'Backend Dev & DB Specialist',
              desc: 'Arshu ensures the backend system and database work flawlessly, enabling scalability and reliability for an ever-growing gaming platform.',
              img: '/img/Arshu.jpg',
            },
            {
              name: 'Abhishek Kumar Yadav',
              role: 'Frontend Dev',
              desc: 'Abhishek designs and implements intuitive user interfaces, creating engaging experiences for gamers worldwide.',
              img: '/img/Abhishek.jpg',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[280px] md:w-[300px] bg-[#1e1e2f] rounded-xl p-6 text-center transform transition-transform hover:scale-105 shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
              <p className="dark:text-blue-400 mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="min-h-screen flex flex-col justify-center text-center bg-slate-4060 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="special-font hero-heading text-2xl sm:text-3xl md:text-6xl font-semibold dark:text-blue-400 text-black mb-8">
          Our Loc<b>a</b>tion
        </h2>
        <div className="w-full max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230661.0448457596!2d81.63677169964289!3d25.40217189598829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1735380392005!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] border-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default About;
