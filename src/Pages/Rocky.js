import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Rocky = ({myprop}) => {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        console.log(response.data)
        setState(response.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  },[])
  if (loading) {
    return <div>Loading...</div>;
  }

  const movieData =
    [
      {
        title: "Rocky Aur Rani Kii Prem Kahaani",
        imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICA4MksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-evehmvnrtp-portrait.jpg',
        para: 'Action/Drama',
        href: '/rocky',
        imdb: 'tt10329042',
        language:"English",
        name: "All Rise",
        officialSite: "https://www.oprah.com/sp/all-rise.html",
        premiered: "2019-09-23",
        rating:' average-6.6',
        status: "Running",
        summary:"All Rise is a courthouse drama that follows the chaotic, hopeful and sometimes absurd lives of its judges, prosecutors and public defenders, as they work with bailiffs, clerks and cops to get justice for the people of Los Angeles amidst a flawed legal process. Among them is newly appointed Judge Lola Carmichael, a highly regarded and impressive deputy district attorney who doesn't intend to sit back on the bench in her new role, but instead leans in, immediately pushing the boundaries and challenging the expectations of what a judge can be."
      }
    ]
  return (
    <div>
      <div className='w-full px-36 flex '>
        <div className="container my-12 mx-auto px-4 md:px-12">
          {movieData.map((item) => {
            return (
              <div className=" my-1 px-1 w-full md:w-1/3 h-[100px] lg:my-4 lg:px-12 ">
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <Link to={item.href}>
                    <img alt="Placeholder" className="block  w-full" src={item.imageUrl} />
                  </Link>
                  <header className=" items-center text-center justify-between leading-tight p-2 md:p-4 no-underline hover:underline text-black">
                    <h1 className="text-lg">{item.title}</h1>
                    <p>{item.para}</p>
                  </header>
                 
                </article>
              </div>
            )
          })}
          <div className='relative  left-[400px]'>
                 
                  {movieData.map((item) => (
        <>
         <h1 className=' font-bold text-4xl'>{item.title}</h1>
        <p className=' font-bold text-lg py-1' key={item.imdb}>Language: <span className='font-semibold '> {item.language}</span></p>
        <p className='text-lg font-bold py-1'>Dubbed Language  : <span className='text-[#f84464] decoration-solid font-semibold'>Telugu</span></p>
        <p><span className='text-lg font-bold py-1'>Status  :</span>{item.status}</p>
        <p><span className='text-lg font-bold py-1'>Premiered  :</span>{item.premiered}</p>
        <h1><span className='text-lg font-bold py-1'>Rating  :</span> {item.rating}</h1>
        <a href='https://www.oprah.com/sp/all-rise.html' className='font-semibold text-[#f84464] '><span className='text-lg font-bold py-1 text-black'>Office Site  :</span> click Here</a>
        <footer className=" leading-none p-2 md:p-2 py-5">
        <Link to='/form'>
                      <button className='bg-[#f84464] text-white rounded-md px-2 py-2'>Book Tickets</button>
                      </Link>
                  </footer>
        </>
        
      ))}
      
                </div>
        </div>
        
      </div>
     <div className='px-32 relative top-[200px]'>
     {movieData.map((ref)=>
        {
          return(
            <div>
              <h1 className='text-lg font-semibold'>About</h1>
              <p>{ref.summary}</p>
            </div>
          )
        })}
     </div>
    </div>
  )
}

export default Rocky