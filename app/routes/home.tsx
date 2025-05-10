import type { Route } from "./+types/home";
import TopNav from "~/components/top-nav";
import {Link} from "react-router";
import {ArrowDownIcon, ArrowRightIcon, MailIcon, PhoneIcon} from "lucide-react";
import MyArsenalGrid from "~/components/my-arsenal-grid";
import XformerlyTwitter from "~/components/logos/twitter";
import BottomNav from "~/components/bottom-nav";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "emmathedeveloper" },
        { name: "description", content: "FullStack Web Developer" },
        { name: "og:url", content: "https://emmathedeveloper.vercel.app" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "emmathedeveloper" },
        { name: "og:description", content: "FullStack Web Developer" },
        { name: "og:image", content: "https://emmathedeveloper.vercel.app/opengraph.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "emmathedeveloper" },
        { name: "twitter:description", content: "FullStack Web Developer" },
        { name: "twitter:image", content: "https://emmathedeveloper.vercel.app/opengraph.png" },
        { name: "twitter:site", content: "@emmathedev" },
    ];
}

export default function Home() {
  return (
      <>
          <section className={"size-full grid place-items-center"}>
              <div
                  className={"h-full max-width-wrapper px-8 flex flex-col justify-center gap-4 border-x border-foreground/20 relative"}>
                  <h3 className={"text-xl md:text-2xl"}>Hello There 👋,</h3>
                  <h2 className={"text-2xl md:text-5xl"}>I'm <span>Emmanuel</span></h2>
                  <h1 className={"text-5xl md:text-7xl emphasize"}>A <span>FullStack</span> Web Developer</h1>

                  <Link to={'/works'}
                        className={"btn btn-primary group flex items-center gap-4 w-max px-8 py-4 rounded-full"}>
                      <ArrowRightIcon className={"rotate-45 group-hover:rotate-0 transition-transform"}/>
                      What I've Made
                  </Link>

                  <a href="#experience"
                     className={"absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"}>
                      <ArrowDownIcon className={"animate-bounce"}/>
                      SCROLL DOWN
                  </a>
              </div>
          </section>

          <section id={"experience"} className={"size-full grid place-items-center"}>
              <div
                  className={"h-full max-width-wrapper px-8 flex flex-col justify-center gap-8 border-x border-foreground/20"}>
                  <h1 className={"text-5xl md:text-7xl emphasize"}>
                      <span>4+ years</span> experience in crafting <span>functional</span> fullstack apps.
                  </h1>

                  <p className={"text-xl md:text-2xl emphasize"}>
                      "I'm not that much of a beauty wizard, but when you need your web app
                      to <span>perform</span>, <span>scale</span> and <span>function</span> efficiently, trust me, I'm
                      the developer for the job"
                  </p>
              </div>
          </section>

          <section className={"w-full grid place-items-center"}>
              <div
                  className={"max-width-wrapper px-8 py-4 flex flex-col justify-center gap-8 border-x border-foreground/20"}>
                  <h1 className={"text-5xl md:text-7xl emphasize"}>
                      My Arsenal
                  </h1>

                  <p className={"text-xl md:text-2xl emphasize"}>
                      Tools I work with (some I love)
                  </p>

                  <MyArsenalGrid />
              </div>
          </section>

          <section className={"size-full grid place-items-center bg-foreground text-background"}>
              <div
                  className={"h-full max-width-wrapper px-8 flex flex-col justify-center gap-8 border-x border-background/20"}>
                  <h1 className={"text-5xl md:text-7xl emphasize"}>
                      Let's Get In Touch
                  </h1>

                  <p className={"text-xl md:text-2xl emphasize"}>
                      Bringing your next project to life is just a DM away.
                  </p>

                  <div className={"flex items-center gap-8"}>
                      <Link to={'https://x.com/emmathedev'} className={"hover:animate-pulse"}>
                          <XformerlyTwitter height={24} width={24}/>
                      </Link>
                      <Link to={'mailto:emmthedeveloper@gmail.com'} className={"hover:animate-pulse"}>
                          <MailIcon size={30}/>
                      </Link>
                      <Link to={'tel:+2348120476808'} className={"hover:animate-pulse"}>
                          <PhoneIcon size={30}/>
                      </Link>
                  </div>
              </div>
          </section>

          <BottomNav />
      </>
  )
}
