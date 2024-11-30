"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);

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
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        // {
        //     title: 'Time',
        //     path: '/time'
        // },

    ]


    const handler = () => {
        router.push('/login')
    }

    // if (pathName.includes('dashboard'))
    //     return <div className="bg-green-500 px-6 py-4">
    //         Dashboard Layout

    //     </div>

    return (
        <div>

            <nav className="bg-blue-700 px-6 py-4 flex justify-between items-center ">
                <h6 className="text-3xl text-white">Next <span className="text-cyan-400 ">Meal</span></h6>
                <ul className="flex justify-between items-center text-blue-300 gap-10">
                    {
                        links.map(link => <Link className={`${pathName === link.path && 'text-cyan-400'}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>
                <div className="flex items-center space-x-3">
                    <div className="flex gap-2">
                        <div className="">
                            <h6>{session?.data?.user?.name}</h6>
                            <hr />
                            <h6>{session?.data?.user?.type}</h6>
                        </div>

                        {
                            session?.data && (<div className="rounded-full mr-3 overflow-hidden size-12">
                                <Image height={50} width={50} alt={session?.data?.user?.name} src={session?.data?.user?.image}></Image>
                            </div>)
                        }

                    </div>
                    <div className=" ">

                        <Link href={'/api/auth/signup'}>
                            <button onClick={handler} className="bg-white  mr-3 px-4  py-2 hover:bg-slate-500 font-semibold  rounded text-orange-600">Sign Up</button></Link>
                        {session.status !== 'authenticated' ? <button onClick={handler} className="bg-white  px-4  py-2 hover:bg-slate-500 font-semibold  rounded text-orange-600">Login</button>
                            :
                            <button
                                onClick={() => signOut()}
                                className="bg-white  px-4  py-2 hover:bg-slate-500 font-semibold  rounded text-orange-600">Logout</button>
                        }
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;