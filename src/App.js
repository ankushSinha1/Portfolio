import Project from "./components/Project"
import './App.js'
function App() {
  return (
    <div className="items-center flex flex-col sm:ml-0 ml-20">
      <div className="flex-col flex min-w-full items-center justify-around  overflow-auto -mt-8  font-link text-white">
        <div className="flex flex-col sm:flex-row mt-12" style={{width: '80%'}}>
          <div className="mr-10">
            <img 
              src={require('./dp.jpg')} 
              className="sm:flex hidden" 
              alt="Profile" 
              style={{objectFit: 'fill', borderRadius: '50%'}}
            />
          </div>
          <div className="flex-col mr-12 sm:mr-16">
            <p className="text-3xl sm:ml-0 sm:text-5xl p-2 text-cyan-300">Ankush Sinha</p>
            <div className="flex-row flex mt-3 justify-start">
              <p className="text-2xl sm:text-3xl text-cyan-500">MERN Developer</p>
            </div>
            <div className="flex-row justify-around mt-6 items-center text-cyan-500">
              I am a Full Stack Web Developer, proficient in HTML5, CSS3, JavaScript and MERN. I have good problem-solving skills
              and a keen eye for detail. I am a collaborative team player with effective communication skills. Passionate about staying
              up-to-date with the latest web development trends and technologies. Ready to leverage my skills to create innovative
              web solutions that drive user engagement and business success.
            </div>
          </div>
        </div>
      </div>
      <p className="text-cyan-400 text-xl ml-36 sm:text-3xl font-semibold justify-center flex mt-12 sm:-ml-4">Projects</p>
      <div className="my-12 flex flex-col justify-center" style={{width: 'auto'}}>
        <Project 
          title="ZumeIT" 
          description="An e-commerce web application built using MERN stack and JWT." 
          gitlink="https://github.com/ankushSinha1/zumeit" 
          vercel="https://zumeit.onrender.com" 
        />
        <Project 
          title="Natours" 
          description="A simple static webpage built using HTML5, CSS3 and Sass." 
          gitlink="https://github.com/ankushSinha1/natours"
          vercel="https://warm-gumdrop-6e9f8b.netlify.app/"
        />
        <Project 
          title="UTube" 
          description="A YouTube video player page built using React and YouTubeAPI." 
          gitlink="https://github.com/ankushSinha1/YoutubeAPI"
          vercel="https://youtube-api-eight.vercel.app/"
        />
        <a 
          href='https://github.com/ankushSinha1' 
          target="blank"
          className="text-cyan-500" 
          style={{textAlign: 'center', fontSize: '25px'}}
        >See more projects</a>
      </div>
      <hr class="my-6 h-0.5 border-t-0 sm:flex hidden w-[900px] bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="sm:ml-0 ml-36">
      <p className="text-cyan-400 text-xl sm:text-3xl font-semibold justify-center flex mt-4 sm:-ml-4">Contact Me</p>
      <p className='text-center mt-2 mb-2 font-light sm:ml-0 ml-7 p-2 overflow-auto text-lg sm:text-xl text-white w-[600px]'>8417927972 | sinha.ankush5454@gmail.com | Chennai, Tamil Nadu </p>
      </div>
    </div>
  );
}

export default App;
