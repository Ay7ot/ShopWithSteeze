import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Navbar from "../NavbarComponents/Navbar";
import { useEffect } from "react";
import StoreItems from "./StoreItems";
import Footer from "../Footer";

export default function Shop() {

    const {showCart, showMenu, showFilters} = useGeneralAppContext()
    
    

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className={`${showCart || showMenu || showFilters ? 'darkBackground h-screen overflow-y-hidden' : ''} transition-all duration- flex flex-col justify-between min-h-screen`}>
            <Navbar />
            <StoreItems />
            <Footer />
        </div>
    )
}
