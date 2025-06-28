import { useNavigate } from "react-router-dom";


const useReturnHandler = ()=>{

    const returnPage = useNavigate();
    return ()=>returnPage(-1);

}
export default useReturnHandler;