async function getUserId(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();

    return data.data;
}

const UserPage = async ({ params }) => {
    const user = await getUserId(params.id);
    return (
        <div className="p-4 bg-slate-100 flex items-center justify-center text-black space-x-6 rounded-xl">
            <img src={user.avatar} alt="Avatar User" className="rounded-xl p-1 border " />

            <div className="flex flex-col ">
                <h2>{user.id}</h2>

                <h3>
                    {user.first_name} {user.last_name}
                </h3>
                <p>email: {user.email}</p>
            </div>
        </div>
    );
};

export default UserPage;
