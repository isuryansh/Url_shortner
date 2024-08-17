import * as React from 'react';
import { Link } from 'react-router-dom';
import { home_url } from '../../Server_Url/home_url';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='bg-slate-900'>
    <div className='container p-2 mx-auto'>
        <nav className='py-5'>
            <div className='text-white px-14'>
                <Link to={home_url}>URLshortner</Link>
            </div>
        </nav>
    </div>
</div>
  );
};

export default Header;
