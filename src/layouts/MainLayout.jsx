import { Link, Outlet } from 'react-router-dom';
import logoImage from '../assets/logo.png'
import searchImage from '../assets/search.png'

export default function MainLayout() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-[#03193A]">
                <div className="max-w-[1100px] 2xl:max-w-[1440px] mx-auto flex justify-between items-center py-[1rem]">
                    <div className="logo pr-[0.93rem]">
                        <img src={logoImage} alt="" />
                    </div>
                    <div className="header-center flex flex-grow ml-[3.5rem] ">
                        <div className="search">
                            <img src={searchImage} alt="" />
                        </div>
                        <nav className="flex items-center gap-[1.5rem] ml-[2rem]">
                            <Link to="/" className='text-[#FFF] text-sm uppercase no-underline'>Home</Link>
                            <Link to="/" className='text-[#FFF] text-sm uppercase no-underline'>Game</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>Infor</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>News</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>Promotions</Link>
                            <Link to="/about" className='text-[#FFF] text-sm uppercase no-underline'>VIP</Link>
                        </nav>
                    </div>
                    <div className="buttons">
                        <button className='bg-[#12294A] px-[0.75rem] py-[0.56rem] text-[#FFF] text-sm rounded-[0.62rem]'>LOGGIN</button>
                        <button className='bg-[#01AF70] px-[0.75rem] py-[0.56rem] text-[#FFF] text-sm rounded-[0.62rem] ml-[0.5rem]'>Registration</button>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="">
                © 2025 - MyApp
            </footer>
        </div>
    );
}
