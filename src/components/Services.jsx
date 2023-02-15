import {GiPineTree} from 'react-icons/gi'
import {IoBuild} from 'react-icons/io5'
import {MdSell} from 'react-icons/md'

function Services(){
    return (
        <div>
            <div className="w-screen h-fit bg-white flex p-1">
                <div className="w-5/6 m-auto mt-10 pb-10">
                    <p className="text-center text-3xl text-green-800 font-bold tracking-wide" id="services">Os nossos serviços</p>
                    <div className="w-16 h-[2px] rounded bg-black m-auto mt-4 "></div>
                    <div className="flex flex-wrap sm:justify-between my-5 justify-center">
                        <div className='mt-5 flex flex-col justify-center items-center bg-green-800 rounded text-white p-5 min-w-[30%] lg:w-[30%] w-72 min-h-[25vh]'>
                            <GiPineTree size={55}></GiPineTree>
                            <p className='mt-5 xl:text-xl lg:text-lg font-bold uppercase'>Construção de Jardins</p>
                            <p className='w-3/4 text-sm text-center'>Oferecemos ao jardim de quem nos procura um futuro promissor </p>
                        </div>
                        <div className='mt-5 flex flex-col justify-center items-center bg-green-800 rounded text-white p-5 min-w-[30%] lg:w-[30%] w-72 min-h-[25vh]'>
                            <IoBuild size={55}></IoBuild>
                            <p className='mt-5 xl:text-xl lg:text-lg font-bold uppercase'>Manutenção de Jardins</p>
                            <p className='w-3/4 text-sm text-center'> Cuidamos do futuro do seu jardim</p>
                        </div>
                        <div className='mt-5 flex flex-col justify-center items-center bg-green-800 rounded text-white p-5 min-w-[30%] lg:w-[30%] w-72 min-h-[25vh]'>
                            <MdSell size={55}></MdSell>
                            <p className='mt-5 xl:text-xl lg:text-lg font-bold uppercase'>Venda ao público</p>
                            <p className='w-3/4 lg:text-sm text-center'>Para que nada lhe falte disponibilizamos um local de venda ao público</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen h-38vh flex lg:flex-row flex-col'>
                <div className='lg:w-[45vw] max-h-[35vh] h-[35vh] bg-loja lg:max-h-full lg:h-[45vh] lg:order-first order-last w-full bg-no-repeat bg-cover bg-center'>
                </div>
                <div className='lg:w-[65vw] h-[45vh] w-full bg-filler text-white bg-cover bg-no-repeat'>
                    <div className='bg-black/[85%] h-full w-full p-10'>
                        <p className='text-2xl uppercase font-bold'>A nossa loja física</p>
                        <p className='mt-5 text-lg leading-8'>Para que nada lhe falte o Jardim do Futuro disponibiliza de uma loja física para que nada lhe falte! <br />
                            Aqui pode encontrar tudo o que precisa para levar o seu jardim ao próximo nível, desde plantas e árvores até artigos de decoração e utensílios.
                            <br />Visite-nos já e veja por si mesma
                        </p>

                        <p className='mt-16 py-3 font-bold w-fit px-10 border-2 border-white rounded-full hover:text-black hover:bg-white cursor-pointer'>Visite-nos já</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services