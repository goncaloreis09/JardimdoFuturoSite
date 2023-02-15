import {AiOutlineMobile} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'
import {GrLocation} from 'react-icons/gr'

function ContactUs(){
    return (
        <div className="w-screen flex pb-10">
            <div className="w-5/6 m-auto mt-10">
                <p className="text-center text-3xl text-green-800 font-bold tracking-wide" id="contactos">Contacte-nos</p>
                <div className="w-16 h-[2px] rounded bg-black m-auto mt-4 "></div>

                <div className='flex lg:flex-row flex-col space-y-10 justify-around mt-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <AiOutlineMobile size={60} color="green"></AiOutlineMobile>
                        <p className='text-sm mt-2'>249 534 111</p>
                        <p className='text-xs'>(Custo de chamada 0,60€)</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <MdOutlineEmail size={60} color="green"></MdOutlineEmail>
                        <p className='text-sm mt-2'>jardimdofuturo.lda@gmail.com</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <GrLocation size={60} color="green"></GrLocation>
                        <p className='text-sm mt-2'>Estrada da Lameira SN</p>
                        <p className='text-xs'>Eira da Pedra, Fátima</p>
                    </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.842587687921!2d-8.66309438451549!3d39.608228312335044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18832dac83a709%3A0x804f65df851f5614!2sJardim%20do%20Futuro%2C%20Lda!5e0!3m2!1spt-PT!2spt!4v1676478793315!5m2!1spt-PT!2spt"
                        width={"600"} 
                        height={"450"} 
                        style={{"border" : 0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        className='mt-16 w-full'></iframe>
            </div>
        </div>
    )
}

export default ContactUs