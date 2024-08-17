import * as React from 'react';
import { UrlData } from './Interface/url_interface';
import axios from 'axios'
import { server_url } from '../../Server_Url/server_url';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


interface ITableProps {
    data: UrlData[];
    updateReloadState: () => void;
}

const Table: React.FunctionComponent<ITableProps> = (props) => {
    const { data, updateReloadState } = props
    console.log(data);

    const renderDataTable = () => {
        return data.map((item) => {
            
            return(
                
                <tr key={item._id} className='border-b text-white font-semibold bg-gray-600 hover:bg-gray-500 '>
                    <td className='px-6 py-3 break-words'>
                        <Link to={item.fullUrl} target='_blank'>{item.fullUrl}</Link>
                    </td>

                    <td className='px-6 py-3 '>
                       <Link to={`${server_url}/shortUrl/${item.shortUrl}`} target='_blank'>{item.shortUrl}</Link>
                    </td>

                    <td  className='px-6 py-3'>{item.click}</td>

                    <td className='px-6 py-3 flex gap-2' >
                        <button onClick={() => copyUrl(item.shortUrl)} className='bg-blue-300 px-2 py-1 text-gray-800 rounded-xl hover:bg-blue-400 hover:text-gray-900'>Copy</button>
                        <button onClick={() => deleteUrl(item._id)} className='bg-blue-300 px-2 py-1 text-gray-800 rounded-xl hover:bg-blue-400 hover:text-gray-900'>Delete Url</button>
                    </td>
                    
                </tr>
            )
        })
    };
       
        const copyUrl = async(url:string) => {
            await navigator.clipboard.writeText(`${server_url}/shortUrl/${url}`);
            toast(`URL Copied : ${server_url}/shortUrl/${url}` , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                })
        }

    const deleteUrl = async (id: String) => {
        await axios.delete(`${server_url}/shortUrl/${id}`)
        updateReloadState()
        toast.error(`URL Deleted` , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
    }
    
  return(
    <div className='container mx-auto pt-2 pb-10 '>
        <div className='relative overflow-x-auto shadow-sm sm:rounded-lg mx-2'>
            <table className='w-full table-fixed text-sm  text-left rtl:text-right text-gray-500 '>
                <thead className='text-md uppercase text-gray-50 bg-gray-700'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-6/12'>Your-Url</th>
                        <th scope='col' className='px-6 py-3 w-3/12'>Short-Url</th>
                        <th scope='col' className='px-6 py-3 '>Clicks</th>
                        <th scope='col' className='px-14 py-3 '>Action</th>
                    </tr>
                </thead>

                <tbody>{renderDataTable()}</tbody>
            </table>
        </div>
    </div>
  ) ;
};

export default Table;
