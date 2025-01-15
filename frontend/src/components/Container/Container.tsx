import * as React from "react";
import FormContainer from "./FormContainer";
import { UrlData } from "./Interface/url_interface";
import axios from "axios";
import DataTable from "./DataTable";

const backendUrl = import.meta.env.VITE_REACT_API_URL;
interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [relode, setRelode] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setRelode(true);
  };

  const fetchtableData = async () => {
    const response = await axios.get(`${backendUrl}/shortUrl`);
    setData(response.data);
    setRelode(false);
  };

  React.useEffect(() => {
    fetchtableData();
  }, [relode]);

  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </>
  );
};

export default Container;
