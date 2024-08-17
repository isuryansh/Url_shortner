import * as React from 'react';
import axios from 'axios';
import {server_url} from '../../Server_Url/server_url'

interface IFormContainerProps {
    updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const { updateReloadState } = props
    const [fullUrl, setfullUrl] = React.useState<string>("");
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
         await axios.post(`${server_url}/shortUrl`,{
             fullUrl : fullUrl,
         });
         setfullUrl("");
         updateReloadState();
        } catch (error) {
         console.log(error);
         
        }
    }

  return (
    <div className='container mx-auto p-2'>
    <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>
        <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
        <h2 className='text-black text-4xl text-center pb-4'>URL Shortner</h2>
        <p className='text-black text-center pb-2 text-xl '>Paste Your Link to Shorten it</p>
        <form onSubmit={handleSubmit}>
            <div className='flex'>
                <div className='relative w-full'>
                    <input type="text" placeholder='Add Your Link' required className='block w-full p-4  text-sm border border-gray-500 rounded-lg'
                    value={fullUrl}
                    onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setfullUrl(e.target.value)} />
                    <button type='submit' className='absolute top-0 end-0 p-2.5 text-sm rounded-lg font-medium h-full text-white bg-gray-600 hover:bg-slate-800 focus:ring-slate-800'>Shorten URL</button>
                </div>
            </div>
        </form>
        </div>
    </div>
</div>
  );
};

export default FormContainer;
