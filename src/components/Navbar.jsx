"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        // {
        //     title: 'Time',
        //     path: '/time'
        // },

    ]


    const handler = () => {
        router.push('/login')
    }

    if (pathName.includes('dashboard'))
        return <div className="bg-green-500 px-6 py-4">
            Dashboard Layout

        </div>

    return (
        <div>

            <nav className="bg-blue-700 px-6 py-4 flex justify-between items-center gap-10">
                <h6 className="text-3xl text-white">Next <span className="text-cyan-400 ">Meal</span></h6>
                <ul className="flex justify-between items-center text-blue-300 gap-10">
                    {
                        links.map(link => <Link className={`${pathName === link.path && 'text-cyan-400'}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>
                <button onClick={handler} className="bg-white px-4 rounded text-blue-600">Login</button>
            </nav>
        </div>
    );
};

export default Navbar;