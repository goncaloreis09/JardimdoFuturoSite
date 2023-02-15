import {useState, useEffect, useRef} from 'react'

function Carrousel(){

    const [currentSlide, setCurrentSlide] = useState(1)


    /*useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                if(prev === 3){
                    return 1
                }

                return prev + 1
            })

        }, 2500)

        return () => clearInterval(interval)
    }, [currentSlide])*/

    return (
        <div className="h-[70vh] bg-main w-screen bg-cover bg-no-repeat">
            <div className="h-full w-full bg-black/50 flex relative">
                <div className="2xl:w-1/3 h-fit m-auto md:w-1/2 w-5/6">
                    <p className="uppercase font-bold text-white text-center xl:text-6xl lg:text-5xl sm:text-4xl text-3xl">Jardim do Futuro</p>
                    <p className="text-white text-center uppercase lg:text-lg sm:text-xs text-xs">O futuro do seu jardim começa aqui</p>
                    <div className="mt-10 flex items-center">
                        <a className="text-white bg-green-700 rounded-full px-12 py-2 w-fit m-auto cursor-pointer hover:bg-green-800 active:bg-green-700" href="#about-us">Saiba Mais</a>
                    </div>
                </div>

                <div className="flex absolute bottom-4 lg:left-[46.5%] space-x-2 left-[35%] sm:left-[40%]">
                    <div className={`w-9 rounded h-1 bg-green-800 cursor-pointer`} data-slide="1"></div>
                    <div className="w-9 rounded h-1 bg-gray-200 cursor-pointer"  data-slide="2"></div>
                    <div className="w-9 rounded h-1 bg-gray-200 cursor-pointer"  data-slide="3"></div>
                </div>
            </div>
        </div>
    )
}

export default Carrousel