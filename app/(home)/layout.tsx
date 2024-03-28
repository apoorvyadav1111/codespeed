import Navbar from "./components/navbar";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="h-full dark:bg-[#151515 dark:text-green-300">
            <Navbar />
            <main className="pt-40">
                {children}
            </main>
        </div>
    )
}


export default HomePageLayout;