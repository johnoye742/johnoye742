import '@flaticon/flaticon-uicons/css/brands/all.css'

function NavBar() {
    return (
        <div className="w-full flex flex-row justify-between px-10 py-10">
            <a href=''>
                <h1 className="text-3xl">John Oye</h1>
                <p>~ dev-shinobi@johnoye742</p>
            </a>

            <div className='flex flex-row items-center'>
                <a href="https://github.com/johnoye742" className='hover:text-[#A5D7E8] transition-all duration-300 ease-in-out'><i className="fi fi-brands-github"></i> johnoye742</a>
            </div>
        </div>
    )
}

export default NavBar