import './App.css';
import './index.css';
import NavBar from './Components/NavBar'
import Card from './Components/Card';
import cartoon from './cartoon.jpeg'
import '@flaticon/flaticon-uicons/css/brands/all.css'
import '@flaticon/flaticon-uicons/css/regular/rounded.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  Aos.init({
    once: true,
    disable: false
  })
  return (
    <div className=" bg-[#0B2447] text-white">
      <NavBar></NavBar>

      
      <main className='lg:px-12 px-6'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-3' data-aos='zoom-in' data-aos-duration='2000'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-3xl uppercase font-extrabold bg-text-bg intro-text bg-cover bg-no-repeat'>A revolutionary software developer focused on solving real world problems.</h1>
              <p>I am John Oye a software developer, who's being learning and developing applications for over 5 years. I  create applications that'll solve real world problems, so if you like that consider contacting me with your ideas. I'm also open to gigs and roles 😊</p>
              <a href='mailto:olugbengajohnoye@gmail.com' target='_blank' rel="noreferrer" className=' ml-4 flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i class="fi fi-rr-envelope text-xl p-0 self-center mt-1.5"></i></a>
            </div>
            <div>
              <img src={cartoon} alt='cartoon for dev-shinobi'></img>
            </div>
          </div>
          
          <section className='mt-16 pt-5 pb-24 border-t border-t-blue-500'>
            <h1 className='text-3xl'>My Services</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-3 gap-3'>
              <Card title={'Single Page Applications (SPAs)'} desc={'I can help you develop your SPAs using the power of React(or Livewire) and Laravel for backend if needed.'}></Card>
              <Card title='Software as a Service (SaaS)' desc='I love building softwares and solutions to real world problems and will pay close attention to your needs and requests.'></Card>
              <Card title='Web Services' desc='I can help build very performant web services with a solid infrastructure that prioritize speed over anything'></Card>

              <Card title='Web Development & Maintainance' desc='I build and maintain PHP based sites to a very high standard that you will love and appreciate'></Card>
            </div>
            
          </section>

          <section className='mt-16 pt-5 pb-24 border-t border-t-blue-500'>
            <h1 className='text-3xl'>My Stack</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-3 gap-3'>
              <Card title={'LAMP Stack'} desc='Laravel, Apache, MySQL and PHP'></Card>
              <Card title={'FullStack Web Development'} desc='Laravel, Next.js, Livewire, MySQL, Nginx'></Card>
              <Card title={'Web3'} desc='Rust, CosmWasm, Xion' />
              <Card title='Java'></Card>
            </div>
            
          </section>

          <section className='mt-16 pt-5 pb-24 border-t border-t-blue-500'>
            <h1 className='text-3xl'>Recent Projects</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-3 gap-3'>

              <Card title={'Good Shepherd Newspaper'} desc={'I built and manage the website of Good Shepherd Newspaper which is the official publication of the Catholic Archdiocese of Abuja'} tech={'PHP, Wordpress'} link={'https://goodshepherd.news'}></Card>
              <Card title={'Project Hermes'} desc={'Project Hermes is an open source key-value datastore written in Java. It has surpassed alternatives like Redis on certain benchmarks and is still in development.'} link={'https://project-hermes-ruddy.vercel.app/'} tech={'Java'}></Card>
              <Card title={'ArchGabriel'} desc={'Named after the messenger, this project is an open source self hostable alternative to Pusher. With ArchGabriel you can throw away the need to have to write server-side code ever again for your messaging apps, all you need to do is turn on the server and connect to it. Simple and short.'} link={'https://github.com/johnoye742/arch-gabriel-server'} tech={'Java'}></Card>

              <Card title='CRMStar' desc='This is an open source CRM software for Health Care and Real Estate which intends to solve real world problems especially in the Nigerian health care sector.' link={'https://github.com/johnoye742/crm-system'} tech={'Laravel, Livewire'}></Card>

              <Card title='EduRes' desc='This is an application I am working on where students can sign in and get resources to learn and study' link={'https://edu-res.onrender.com'} tech={'Laravel, React'}></Card>

              <Card title={'SafeSpace'} desc={'SafeSpace is a chat application created to help people chat anonymously without much censorship.'} link={'https://safe-space-lucm.onrender.com'} tech={'Laravel, TailwindCSS, VanilaJS'}></Card>


            </div>
            
          </section>

          <footer className='mt-16 pt-5 pb-24 border-t border-t-blue-500'>
            <div className='flex flex-row justify-center gap-5'>
              <a href='https://fb.me/johnoye742' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i class="fi fi-brands-facebook text-xl p-0 self-center mt-1.5"></i></a>
              <a href='https://instagram.com/johnoye999' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i class="fi fi-brands-instagram text-xl p-0 self-center mt-1.5"></i></a>
              <a href='https://x.com/TheDevShinobi' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i class="fi fi-brands-twitter text-xl p-0 self-center mt-1.5"></i></a>
              <a href='https://wa.me/+2347085760881' rel="noreferrer" target='_blank' className='flex flex-row items-center justify-center h-12 w-12 rounded-full border border-[#A5D7E8]'><i class="fi fi-brands-whatsapp text-xl p-0 self-center mt-1.5"></i></a>
            </div>

            <p className='text-center mt-3 text-xl'>&copy; { new Date().getFullYear() } Johnoye742</p>
          </footer>
      </main>
      
    </div>
  );
}

export default App;
