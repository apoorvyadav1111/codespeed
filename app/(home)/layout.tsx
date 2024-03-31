import Footer from "./components/footer";
import Navbar from "./components/navbar";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="dark:text-green-300">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}


export default HomePageLayout;