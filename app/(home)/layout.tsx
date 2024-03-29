import Navbar from "./components/navbar";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-wheat dark:bg-[#1f1f1f] dark:text-green-300">
            <Navbar />
            <main className="pt-40">
                {children}
            </main>
        </div>
    )
}


export default HomePageLayout;