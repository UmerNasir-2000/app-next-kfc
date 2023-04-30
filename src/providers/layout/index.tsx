import Children from "@/shared/types/children";
import Navbar from "@/components/core/navbar";
import Footer from "@/components/core/footer";

export default function LayoutProvider(props: Children) {

    return (
        <>
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )


}