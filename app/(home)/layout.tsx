import Footer from "./components/footer";
import Navbar from "./components/navbar";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="bg-wheat dark:bg-[#1f1f1f] dark:text-green-300">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}


export default HomePageLayout;