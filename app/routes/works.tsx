import WorkCard from "~/components/work-card";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "emmathedeveloper" },
        { name: "description", content: "What I've Made" },
    ];
}

export default function WorksPage() {

    const works = [
        {
            imageSrc: "https://repository-images.githubusercontent.com/969931985/919e9151-2364-4c40-b3a2-122a19c16222",
            name: 'MixStack',
            description: 'The modern auth starter template built with React Router v7, TailwindCSS, Drizzle ORM, and PostgreSQL.',
            repository: 'https://github.com/emmathedeveloper2/mix-stack'
        },
        {
            imageSrc: 'https://polla-app.netlify.app/images/twitter_opengraph_dark.png',
            name: 'Polla',
            description: 'A simple polling app with OAuth',
            website: 'https://polla-app.netlify.app',
            repository: 'https://github.com/emmathedeveloper2/polla'
        },
        {
            imageSrc: 'https://kizicuts.netlify.app/assets/images/twitter_opengraph_dark.png',
            name: 'Kizicuts',
            description: 'Minimal Landing page for a male Saloon',
            website: 'https://kizicuts.netlify.app',
            repository: 'https://github.com/emmathedeveloper2/kizicuts'
        },
    ]

    return (
        <>
            <section className={"w-full grid place-items-center"}>
                <div className={"max-width-wrapper border-x border-foreground/20 p-8"}>
                    <h1 className={"text-3xl md:text-7xl mb-8"}>What I've Made</h1>

                    <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-4"}>
                        {works.map((work , i) => (
                            <WorkCard key={i} item={work} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}