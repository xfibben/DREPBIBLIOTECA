import {navbar} from "./navbar";
export const layout=({children})=>{
    return <>

        <navbar/>
        {children}
        </>
}