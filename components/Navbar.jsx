import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <Link href="/"> Home</Link>
            <ul>
                <li>
                    <Link href="/">Users</Link>
                </li>
            </ul>
        </nav>
    );
};
