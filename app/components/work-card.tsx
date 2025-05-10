import {Link} from "react-router";
import {ArrowRightIcon} from "lucide-react";

type WorkItem = {
    imageSrc: string
    name: string
    description: string
    website?: string
    repository?: string
}

type WorkCardProps = {
    item: WorkItem
}

export default function WorkCard({ item } : WorkCardProps) {

    return (
        <div className={"w-full p-4 hover:bg-foreground/10 rounded-2xl transition-colors flex flex-col gap-4"}>
            <div className={"rounded overflow-hidden cursor-pointer"}>
                <img src={item.imageSrc} className={"size-full object-cover"}/>
            </div>

            <h3 className={"text-3xl"}>{item.name}</h3>

            <p className={"text-foreground/80"}>{item.description}</p>

            <div className={"flex gap-4"}>
                {item.website &&
                <Link target={"_blank"} to={item.website} className={"btn btn-primary gap-2 px-4 rounded-full p-2"}>
                    Visit Website
                    <ArrowRightIcon />
                </Link>
                }
                {item.repository &&
                <Link target={"_blank"} to={item.repository} className={"btn btn-outline gap-2 px-4 rounded-full p-2"}>
                    Repository
                </Link>
                }
            </div>
        </div>
    )
}