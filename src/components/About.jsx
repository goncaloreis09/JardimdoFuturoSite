import about from '../media/about.jpeg'

function About(){
    return (
        <div className="w-screen h-fit bg-gray-100 flex p-10">
           <div className="w-5/6 m-auto mt-10 lg:h-[55vh] h-fit">
                <p className="text-green-800 font-bold text-3xl text-center tracking-wide" id="about-us">Sobre Nós</p>
                <div className="w-16 h-[2px] rounded bg-black m-auto mt-4 "></div>
                <div className='mt-10 flex flex-col lg:flex-row'>
                    <div  className="w-5/6 order-last lg:order-first lg:w-1/2">
                        <img src={about} alt=""  width={700}/>
                    </div>
                    <div className='lg:ml-16 lg:width-1/2 w-full pb-10 text-left'>
                        <p className='font-bold uppercase text-2xl mb-4'>Quem Somos?</p>
                        <p>Somos uma empresa bastante</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default About