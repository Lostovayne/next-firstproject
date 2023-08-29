// "use client";
import Link from "next/link";

export const Users = ({ users }) => {
    return (
        <ul>
            {users.map((user) => (
                <Link href={`/users/${user.id}`} key={user.id}>
                    <li className="bg-slate-500 mb-2 p-4 rounded-lg flex justify-between space-x-3">
                        <div>
                            <h5 className="font-medium text-lg text-black">
                                {user.id} {user.first_name} {user.last_name}
                            </h5>
                            <p className="text-slate-200"> email:{user.email}</p>
                        </div>
                        <img
                            src={user.avatar}
                            width={100}
                            height={100}
                            className="rounded-xl p-1 border"
                        />
                    </li>
                </Link>
            ))}
        </ul>
    );
};
