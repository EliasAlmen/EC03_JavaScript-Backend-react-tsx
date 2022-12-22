import { useEffect } from "react";
import { useLocation } from "react-router-dom";


//found on the internet
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}