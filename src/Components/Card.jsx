
function Card({ title, desc, link, tech }) {
    return (
        <div data-aos='flip-up' data-aos-duration='1000' className='bg-[#19376D] px-8 py-5 hover:shadow-xl transition-all duration-500 ease-in-out'>
            <h1 className='text-xl pb-1 text-[#A5D7E8]'>{ title }</h1>
            <p className="pb-2">{ desc }</p>
            { tech && <p className="pb-2 text-gray-500">Technologies Used: { tech }</p> }
            { link && <a className="mt-6 text-[#576CBC] hover:text-sky-500 transition-all ease-in-out duration-300" target="_blank" rel="noreferrer" href={link}>View </a> }
        </div>
    )
}

export default Card
