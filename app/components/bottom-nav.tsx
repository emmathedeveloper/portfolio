import {Link} from "react-router";
import XformerlyTwitter from "~/components/logos/twitter";
import GitHub from "~/components/logos/github";


const BottomNav = () => {

    return (
        <div
            className={"w-max bg-foreground text-background rounded-full p-4 fixed bottom-4 right-2 flex items-center gap-8"}>
            <Link target={"_blank"} to={'https://x.com/emmathedev'}>
                <XformerlyTwitter/>
            </Link>
            <Link target={"_blank"} to={'https://github.com/emmathedeveloper2'}>
                <GitHub height={24} width={24}/>
            </Link>
        </div>
    )
}

export default BottomNav