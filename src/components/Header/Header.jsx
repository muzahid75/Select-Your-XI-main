import logo from '../../assets/logo.png'
import dollar from '../../assets/dollar.png'
import hero from '../../assets/bg-shadow.png'
import banner from '../../assets/banner-main.png'
const Header = () => {
    return (
        <header className='my-10 w-[1320px] mx-auto '>

            {/* navbar  */}
            <section className='flex mb-6 justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className='flex items-center gap-4 mr-10'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                    <li><button className='btn'>0 coin <img src={dollar} alt="" /> </button></li>
                </ul>
            </section>


            {/* banner section  */}
            <section className='py-16 text-white space-y-4 bg-cover bg-no-repeat flex flex-col justify-center items-center rounded-2xl' style={{ backgroundImage: `url(${hero})`, backgroundColor: 'black' }}>
                <div>
                    <img src={banner} alt="" />
                </div>
                <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl opacity-70'>Beyond Boundaries Beyond Limits</p>
                <div className='border border-yellow-300 p-2 rounded-2xl'>
                    <button className="btn rounded-2xl bg-amber-300 text-black border-none font-bold">Claim Free Credit</button>
                </div>
            </section>
        </header>
    );
};

export default Header;