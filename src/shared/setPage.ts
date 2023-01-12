import { NavMenuLinks } from "./types"

// type hookFn = 

//check if type exist
export const setPage = (hook:(value:NavMenuLinks) => void, link:NavMenuLinks) => {
    if(hook) return hook(link)
}