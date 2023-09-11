import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center lg:w-[78%] m-auto mt-5'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </nav>
            <hr className='lg:w-[78%] m-auto my-3'/>
        </header>
    );
};

export default Header;