import * as React from 'react';
import FormContainer from './FormContainer';
import { UrlData } from './Interface/url_interface';
import axios from 'axios';
import { server_url } from '../../Server_Url/server_url';
import DataTable from './DataTable';


interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
    const[data, setData] = React.useState<UrlData[]>([]);
    const[relode, setRelode] = React.useState<boolean>(false);

    const updateReloadState = ():void => {
      setRelode(true);
    }

    const fetchtableData = async() => {
        const response = await axios.get(`${server_url}/shortUrl`);
        setData(response.data);
        setRelode(false)
        
     }

    React.useEffect(() => {
        fetchtableData();
    }, [relode])

  return(
    <>
    <FormContainer updateReloadState={updateReloadState}/>
    <DataTable updateReloadState={updateReloadState} data={data}/>
    </>
  ) ;
};

export default Container;
