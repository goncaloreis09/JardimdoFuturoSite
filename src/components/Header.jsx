import logo from '../media/logo.png'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {useState} from 'react'

function Header(){

    const headerOptions = [
        {
            name: 'Home',
            path: '#'
        },
        {
            name: 'Sobre Nós',
            path: '#about-us'
        },
        {
            name: 'Serviços',
            path: '#services'
        },
        {
            name: 'Galeria',
            path: '#galeria'
        },
        {
            name: 'Contactos',
            path: '#contactos'
        }]
    const [mobile, setMobile] = useState(false)

    return (
        <header className="h-20">
            <div className="w-5/6 h-full m-auto flex items-center justify-between">
                <div className="">
                    <img src={logo} alt="Logotipo da empresa" width={110}/>
                </div>

                <div className='md:flex md:space-x-10 hidden'>
                    {
                        headerOptions.map((option, index) => 
                            <a key={index} href={option.path} className="hover:text-green-800">{option.name}</a>
                        )
                    }
                </div>

                <div className='cursor-pointer p-1 pr-0 md:hidden' onClick={(e) => setMobile(mobile => !mobile)}>
                    <div className='w-8 h-[4px] bg-black m-1 rounded-full'></div>
                    <div className='w-8 h-[4px] bg-black m-1 rounded-full'></div>
                    <div className='w-8 h-[4px] bg-black m-1 rounded-full'></div>
                </div>
                
                {
                    mobile ?
                    <div className='z-10 absolute right-0 bottom-0 w-screen h-[calc(100vh-5rem)] md:hidden p-10 bg-gray-200 flex flex-col justify-between animate-slideUp'>
                        <div>
                            {
                                headerOptions.map((option, index) => 
                                    <p className='my-6 border-b-2 border-black cursor-pointer' key={index}>{option}</p>
                                )
                            }
                        </div>
                        <div className='text-center text-gray-500 mb-20'>
                            <p className='uppercase tracking-wider'>Redes Sociais</p>
                            <div className='flex justify-around mt-12'>
                                <div><BsFacebook size={45}/></div>
                                <div><BsInstagram size={45}/></div>
                                <div><MdOutlineEmail size={50}/></div>
                            </div>
                        </div>
                    </div>

                    : ""
                }
                
            </div>
        </header>
    )
}

export default Header