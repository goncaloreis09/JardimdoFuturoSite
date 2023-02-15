import logo from '../media/logo.png'

function Footer(){
    return (
        <div className="w-screen bg-gray-100 flex flex-col">
            <div className="w-5/6 m-auto mt-10 flex justify-between sm:flex-row flex-col">
                <div className='lg:w-1/3 w-full'>
                    <img src={logo} alt="Logotipo da empresa" width={100}/>
                    <p className='pt-3 text-sm text-gray-800'>Com mais de 10 anos de experiência a mudar a paisagem das casas portuguesas, o Jardim do Futuro é uma empresa especializada 
                        em jardinagem. Priorizando a felicidade dos nossos clientes, nós realizamos jardins seja na sua casa ou até mesmo em obras 
                        públicas, seja onde for nós ajudamos a dar vida ao lar! 
                        Disponibilizamos também uma loja física onde pode encontrar tudo o que deseja para o seu jardim.
                    </p>
                </div>
                <div className='sm:w-1/3 w-full sm:pl-5 pt-10 sm:pt-0'>
                    <p className='text-gray-500 uppercase tracking-wider mb-5'>Informações</p>
                    <p className='text-sm text-gray-600'>Localização</p>
                    <p className='text-sm text-gray-600 mt-2'>Estrada da Lameira SN, Eira da Pedra, Fátima</p>
                    <p className='text-sm text-gray-600 mt-2'><span className='text-green-800 font-bold'>Tel:</span> +351 249 534 111</p>
                    <p className='text-sm text-gray-600 mt-2'><span className='text-green-800 font-bold'>Email:</span> jardimdofuturo.lda@gmail.com</p>
                    <p className='text-gray-500 uppercase tracking-wider mt-4 text-sm'>Horário</p>
                    <p className='text-sm text-gray-600 mt-2'><span className='text-green-800 font-bold'>Seg a Sex:</span> 09:00-13:00 / 14:00-18:00</p>
                    <p className='text-sm text-gray-600 mt-2'><span className='text-green-800 font-bold'>Sáb:</span> 09:00-13:00 / 14:00-17:30</p>
                    <p className='text-sm text-gray-600 mt-2'><span className='text-green-800 font-bold'>Dom:</span> Descanso Semanal</p>
                </div>
                <div className='sm:w-1/3 w-full sm:pl-5 pt-10 sm:pt-0'>
                    <p className='text-gray-500 uppercase tracking-wider'>Livro de Reclamações</p>
                </div>
            </div>
            <p className='text-center mt-4 text-xs py-4 bg-gray-200'>© Copyright 2023 <span className='font-bold'>Jardim do Futuro</span>. Todos os direitos reservados</p>
        </div>
    )
}

export default Footer