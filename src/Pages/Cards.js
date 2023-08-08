import React from 'react'
import chiru from '../Assets/chiru.jpg'
import { Link } from 'react-router-dom'
const Cards = () => {
    const movieData =
        [
            {
                title: "Bhola Shankar",
                imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTM4LjZLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354849-euufygppye-portrait.jpg',
                para:'Action/Drama',
                href:'/bhola shankar'
            },
            {
                title: "Bro",
                imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICA5OC40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360172-ncsbpawyxm-portrait.jpg",
                para:'Emotional',
                href:'/bro'
            },
            {
                title:'Jailer',
                imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjYxLjlLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-avfkcduxar-portrait.jpg",
                para:"Drama/Thriller",
                href:'/jailer'
            },
            {
                title:"Meg 2: The Trench",
                imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA4LjdLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-eudhzatstg-portrait.jpg",
                para:"Action",
                href:'/meg2'
            },
            {
                title:"Rocky Aur Rani Kii Prem Kahaani",
                imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICA4MksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-evehmvnrtp-portrait.jpg",
                para:"Comedy",
                href:'/rocky'
            }
        ]
    return (
        <div className='px-24'> 
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-5  -mx-1 lg:-mx-2">
                    {movieData.map((item) => {
                        return (
                            <div className=" my-1 px-1 w-full lg:w-full lg:h-[60%] md:w-1/2 lg:my-4 lg:px-4 ">
                                <article className="overflow-hidden rounded-lg shadow-lg">
                                    <Link to={item.href}>
                                    <img alt="Placeholder" className="block h-auto w-full" src={item.imageUrl} />
                                    </Link>
                                    <header className=" items-center text-center justify-between leading-tight p-2 md:p-4 no-underline hover:underline text-black">
                                        <h1 className="text-lg">{item.title}</h1>
                                        <p>{item.para}</p>
                                    </header>
                                    <footer className=" items-center justify-between leading-none p-2 md:p-2 text-center">
                                        <Link to={item.href}>
                                        <button className='bg-[#f84464] text-white rounded-md px-2 py-2'>Book Now</button>
                                        </Link>
                                    </footer>
                                </article>
                            </div>
                        )
                    })}
                </div>
            </div>






        </div>
    )
}

export default Cards