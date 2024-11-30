import AboutContents from "@/components/AboutContents";
import { getServerSession } from "next-auth";
import { Headland_One } from "next/font/google";
import { authOptions } from "../api/auth/[...nextauth]/route";

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
    title: "About ",
    description: "About Page",
    keywords: ["about", "about page"]
};

const getTime = async () => {
    const res = await fetch("http://localhost:3000/time", { next: { revalidate: 5 } })
    const data = await res.json();
    return data.currentTime;

}


const AboutPage = async () => {
    const session = await getServerSession(authOptions)
    console.log(session);
    const currentTime = await getTime();

    return (
        <div className={`${headland.className} gap-10 px-6 text-3xl flex min-h-screen mt-10`}>
            About Page
            {/* <AboutContents ></AboutContents> */}
            <h3 className="text-red-400 mt-12 text-3xl">Time :{currentTime} </h3>
        </div>
    );
};

export default AboutPage;