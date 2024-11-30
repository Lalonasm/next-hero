"use client"

const page = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            password: e.target.password.value,
            email: e.target.email.value,
            image: e.target.image.value,
            type: e.target.type.value
        }
        const resp = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json()'
            }
        })
        console.log(resp);
    }
    return (
        <div className="flex items-center justify-center mt-24">
            <div>
                <h6 className="text-lg font-semibold">
                    Sign Up with Email and Password
                </h6>
                <div>
                    <form onSubmit={handleRegister} action="">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="name" placeholder="Your Name" className="outline-none bg-slate-700 border-transparent p-3" />
                        <br /><br />
                        <label htmlFor="email">Email</label><br />
                        <input type="text" name="email" placeholder="Your Email" className="outline-none bg-slate-700 border-transparent p-3" />
                        <br /><br />
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" placeholder="Your Password" className="outline-none bg-slate-700 border-transparent p-3" />
                        <br /><br />
                        <label htmlFor="image">Image</label><br />
                        <input type="text" name="image" placeholder="Your Image" className="outline-none bg-slate-700 border-transparent p-3" />
                        <br /><br />
                        <label htmlFor="type">Type</label><br />
                        <select type="text" name="type" placeholder="User Type" className="outline-none bg-slate-700 border-transparent p-3" >
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                            <option value="member">Member</option>
                        </select>
                        <br /><br />
                        <button className="bg-orange-500 p-3">Register</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default page;