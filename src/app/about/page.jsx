import AboutContents from "@/components/AboutContents";
import { Headland_One } from "next/font/google";

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
    title: "About ",
    description: "About Page",
    keywords: ["about", "about page"]
};

const AboutPage = () => {
    return (
        <div className={`${headland.className} gap-10 px-6 text-3xl flex min-h-screen mt-10`}>
            About Page
            {/* <AboutContents ></AboutContents> */}

        </div>
    );
};

export default AboutPage;