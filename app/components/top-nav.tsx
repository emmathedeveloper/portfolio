import {Link} from "react-router";


const TopNav = () => {

    return (
        <nav className={"fixed top-4 left-1/2 -translate-x-1/2 w-[80%] md:w-[800px] bg-background/50 p-4 rounded-full flex items-center justify-center gap-4 border-foreground shadow-2xl"}>
            <Link to={'/projects'}>
                PROJECTS
            </Link>
            <Link to={'/projects'}>
                PROJECTS
            </Link>
        </nav>
    )
}

export default TopNav