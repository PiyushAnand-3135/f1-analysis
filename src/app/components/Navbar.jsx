import Link from "next/link";
import F1Logo from "./F1Logo";
export default function Navbar(){
    return(
        <>
        <nav className="h-20 flex items-center justify-between px-6 bg-gray-950">
            <div>
                <F1Logo className="h-10 w-30"/>
            </div>
            <div>
            <ul className="flex gap-10">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/leaderboards">Leaderboards</Link>
                </li>
                <li>
                    <Link href="/compare">Compare</Link>
                </li>
                <li>
                    <Link href="/about">About us</Link>
                </li>

            </ul>
            </div>
        </nav>
        </>
    );
}