import {useState} from 'react'

function Galeria(){

    const [activeTab, setActiveTab] = useState("Obras Públicas")

    function importAll(r) {
        let images = [];
        r.keys().map((item, index) => { images.push({path : images[item.replace('./', '')] = r(item)}) });
        return images;
      }
      
    const images = importAll(require.context('../media/obraspublicas', false, /\.(png|jpe?g|svg)$/));

    const estabelecimento = importAll(require.context('../media/estabelecimento', false, /\.(png|jpe?g|svg)$/));


    return(
        <div className="w-screen flex bg-gray-100 pb-10">
            <div className="w-5/6 m-auto pt-10">
                <p className="text-center text-3xl text-green-800 font-bold tracking-wide" id="galeria">Galeria</p>
                <div className="w-16 h-[2px] rounded bg-black m-auto mt-4 "></div>

                <div className="flex space-x-6 w-full justify-center mt-6">
                    <div className={`border-2 border-green-800
                                    ${activeTab === 'Obras Públicas' ? 'bg-green-800 text-white' : 'text-green-800'} 
                                    rounded-full px-5 py-1 uppercase text-sm
                                    cursor-pointer`}
                            onClick={(e) => setActiveTab(e.target.textContent)}>
                        Obras Públicas
                    </div>
                    <div className={`border-2 border-green-800 rounded-full px-5 py-1 uppercase text-sm cursor-pointer
                                    ${activeTab === 'Estabelecimento' ? 'bg-green-800 text-white' : 'text-green-800'}`}
                            onClick={(e) => setActiveTab(e.target.textContent)}>
                        Estabelecimento
                    </div>
                </div>

                {
                    activeTab === 'Obras Públicas' ?
                        <div className='flex mt-12 space-x-4 flex-wrap'>
                            {

                                images.map((image) => {
                                    return(
                                        <img src={image.path} alt="" width={400}/>
                                    )
                                })

                            }
                        </div>

                        :
                        <div className='flex mt-12 flex-wrap'>
                            {

                                estabelecimento.map((image) => {
                                    return(
                                        <img src={image.path} alt="" width={400} className="m-2"/>
                                    )
                                })

                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Galeria