"use client"
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname()
    if (pathName.includes('dashboard'))
        return <div className="bg-green-500 px-4 py-3">
            This is dashboard Footer

        </div>

    return (
        <div>
            <footer className="bg-red-400 px-6 py-4">This is footer</footer>
        </div>
    );
};

export default Footer;