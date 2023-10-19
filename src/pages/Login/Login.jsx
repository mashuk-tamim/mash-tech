import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password).then((res) => {
            const user = res.user;
            console.log(user);
            swal("Sign In", "Successful", "success");
        })
        .catch(error => {
            console.error(error);
            toast.error("Invalid email or incorrect password");
        })
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then()
    };
    return (
        <div className="min-h-screen mt-10">
            <div className="w-11/12 md:w-3/5 lg:w-1/2 mx-auto bg-gray-600 rounded-xl p-10 space-y-5 border-green-400 border-2 shadow-xl">
                <h2 className="text-4xl font-bold text-center text-white">
                    Login your account
                </h2>
                <form onSubmit={handleSignIn} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-400">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-400">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-8">
                        <button className="btn btn-ghost btn-outline">
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center mb-5 text-white">
                    Do not have an account?{" "}
                    <Link className="text-green-400 font-bold" to="/register">
                        Register
                    </Link>
                </p>
                <div className="w-4/5 mx-auto text-white">
                    <div className="flex items-center w-4/5 mx-auto pb-5">
                        <p className="border border-gray-400 w-1/2"></p>
                        <p className="mx-2">Or</p>
                        <p className="border border-gray-400 w-1/2"></p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex border border-gray-400 w-4/5 mx-auto rounded-full p-2 justify-between items-center">
                            <img
                                className="w-1/12"
                                src="https://i.ibb.co/qyMrqyg/google.png"
                            />
                            <button
                                onClick={handleGoogleSignIn}
                                className="text-xs md:text-sm lg:text-base"
                            >
                                Continue with Google
                            </button>
                            <p></p>
                        </div>
                    </div>
                </div>
                {/* {loginSuccess && <Navigate to="/"></Navigate>} */}
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;
