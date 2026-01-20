import './index.css';
import NavBar from './Components/NavBar'
import Card from './Components/Card';
import myImage from "./images/transparent-professional-image.png"
import '@flaticon/flaticon-uicons/css/brands/all.css'
import '@flaticon/flaticon-uicons/css/regular/rounded.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const services = [
  {
    title: 'Full-Stack Web Application Development',
    desc: 'Building robust, scalable web applications using modern frameworks like React, Next.js, and Laravel, ensuring seamless user experiences and high performance.'
  },
  {
    title: 'SaaS Platform Development',
    desc: 'Designing and developing Software as a Service solutions tailored to business needs, with a focus on security, scalability, and user-centric features.'
  },
  {
    title: 'API Development & Integration',
    desc: 'Creating efficient RESTful APIs and microservices architectures to enable seamless data flow and third-party integrations across platforms.'
  },
  {
    title: 'Web3 & Blockchain Solutions',
    desc: 'Developing decentralized applications (dApps) and blockchain-based solutions using technologies like EVM, Solana, and CosmWasm for innovative, secure digital experiences.'
  },
  {
    title: 'Application Maintenance & Optimization',
    desc: 'Providing ongoing support, performance optimization, and updates for existing applications to ensure reliability, security, and alignment with evolving business requirements.'
  }
];

const stack = [
  {
    title: 'Web3',
    desc: 'EVM, Solana, Rust, CosmWasm, Xion'
  },
  {
    title: 'FullStack Web Development',
    desc: 'Laravel, Next.js, Livewire, MySQL, Nginx'
  },

];

const projects = [
  {
    title: 'Cosmic Files',
    desc: 'I contributed to the development of Cosmic Files which is a sub-project of the Cosmic Desktop Environment project of System76 for Pop!_OS and the broader Linux community.',
    tech: <img src="https://img.icons8.com/?size=100&id=haeAxVQEIg0F&format=png&color=#FA5252" />,
    link: 'https://github.com/pop-os/cosmic-files',
    img: 'https://i0.wp.com/www.omgubuntu.co.uk/wp-content/uploads/2025/01/COSMIC-FILES.jpg?ssl=1'
  },
  {
    title: 'Presgen: AI Presentation Generator',
    desc: 'I built a simple tool that turns simple or detailed prompts into editable pptx presentations.',
    link: 'https://presgen.vercel.app',
    tech: <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" />,
    img: "/images/presgen.png"
  },
];

function App() {
  Aos.init({
    
    disable: false
  })
  return (
    <div className=" bg-[#0B2447] text-white">
      <NavBar></NavBar>

      
      <main className='lg:px-12 px-6'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-3' data-aos='zoom-in' data-aos-duration='2000'>
            <div className='flex flex-col justify-center gap-5'>
              <h1 className='text-3xl uppercase font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-green-500'>A software developer dedicated to building scalable solutions for real-world challenges.</h1>
              <p>I'm John Oye, a software developer with 5+ years of professional experience building robust, scalable applications. <br/><br/>I specialize in creating innovative solutions that address complex business problems and drive real impact. I'm actively seeking new opportunities and collaborations—let's connect to discuss how I can contribute to your team.</p>
              <a href='mailto:olugbengajohnoye@gmail.com' target='_blank' rel="noreferrer" className='inline-flex gap-2 items-center justify-center px-6 py-3 bg-[#A5D7E8] text-[#0B2447] font-semibold rounded-lg hover:bg-blue-300 transition-colors duration-200 w-fit'><i className="fi fi-rr-envelope text-lg mt-1"></i> <p>Get In Touch</p></a>
            </div>
            <div className="flex justify-center items-center">
              <img src={myImage} alt='My image' className='rounded-full'></img>
            </div>
          </div>
          
          <section className='mt-16 pt-5 pb-24 border-t border-t-blue-500'>
            <h1 className='text-3xl'>Services</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-3 gap-3'>
              {services.map((service, index) => (
                <Card key={index} title={service.title} desc={service.desc} />
              ))}
            </div>
            
          </section>

          <section className='mt-16 pt-5 pb-24 border-t border-t-blue-500'>
            <h1 className='text-3xl'>Technology Stack</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-3 gap-3'>
              {stack.map((item, index) => (
                <Card key={index} title={item.title} desc={item.desc} />
              ))}
            </div>
            
          </section>

          <section className='mt-16 pt-5 pb-24 border-t border-t-blue-500 overflow-hidden'>
            <h1 className='text-3xl'>Projects</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-3 gap-3'>
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  title={project.title} 
                  desc={project.desc} 
                  tech={project.tech} 
                  link={project.link}
                  img={project.img}
                />
              ))}
            </div>
            
          </section>

          <footer className='mt-16 pt-5 pb-24 border-t border-t-blue-500'>
            <div className='flex flex-row justify-center gap-5'>
              <a href='https://fb.me/johnoye742' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i className="fi fi-brands-facebook text-xl p-0 self-center mt-1.5"></i></a>
              <a href='https://instagram.com/johnoye999' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i className="fi fi-brands-instagram text-xl p-0 self-center mt-1.5"></i></a>
              <a href='https://x.com/TheDevShinobi' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i className="fi fi-brands-twitter text-xl p-0 self-center mt-1.5"></i></a>
              <a href='https://wa.me/+2347085760881' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i className="fi fi-brands-whatsapp text-xl p-0 self-center mt-1.5"></i></a>
            </div>

            <p className='text-center mt-3 text-xl'>&copy; { new Date().getFullYear() } Johnoye742</p>
          </footer>
      </main>
      
    </div>
  );
}

export default App;
