import ReactRouter from "~/components/logos/react-router";
import PostgreSQL from "~/components/logos/postgres";
import Supabase from "~/components/logos/supabase";
import ShadcnUI from "~/components/logos/shadcn";
import TailwindCSS from "~/components/logos/tailwind";
import Typescript from "~/components/logos/typescript";
import Motion from "~/components/logos/motion";
import DrizzleORM from "~/components/logos/drizzle";


const MyArsenalGrid = () => {

    return (
        <div className={"grid md:grid-cols-4 gap-4"}>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl"}>
                <ReactRouter height={100} width={100}/>
            </div>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl md:col-span-2"}>
                <PostgreSQL height={100} width={100}/>
            </div>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl"}>
                <Supabase height={100} width={100}/>
            </div>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl md:col-span-2"}>
                <ShadcnUI height={100} width={100} fill={"black"}/>
            </div>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl"}>
                <TailwindCSS height={100} width={100}/>
            </div>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl"}>
                <Typescript height={100} width={100}/>
            </div>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl md:col-span-2"}>
                <Motion height={100} width={100}/>
            </div>
            <div
                className={"hover:bg-foreground/20 transition-colors p-4 border border-foreground/20 flex flex-col items-center justify-center rounded-3xl md:col-span-2"}>
                <DrizzleORM height={100} width={100}/>
            </div>
        </div>
    )
}

export default MyArsenalGrid