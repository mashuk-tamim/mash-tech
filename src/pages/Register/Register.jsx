import { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const Register = () => {
    const { signUp, googleSignIn, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);

        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        } else if (/[A-Z]/.test(password)) {
            toast.error("Password must not contain any UPPERCASE character");
            return;
        } else if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error("Password must not contain any Special character");
        }
        signUp(email, password)
            .then((res) => {
                const user = res?.user;
                console.log(user);
                swal(
                    "Sign Up Successful!",
                    "Please login to continue",
                    "success"
                );

                updateUserProfile(name, photoUrl)
                    .then((res) => {
                        console.log("profile updated", res?.user);
                    })
                    .catch((error) => {
                        console.error("error", error);
                    });
                // navigate('/login');
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.error(error);
                toast.error(`${error?.code.slice(5, error?.message?.length)}`);
            });
    };

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then((res) => {
                const user = res?.user;
                console.log(user);
                swal(
                    "Sign Up Successful!",
                    "Please login to continue",
                    "success"
                );
                navigate(location?.state ? location.state : "/");
                // <Navigate to="/login"></Navigate>;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="min-h-screen my-12">
            <div className="w-11/12 md:w-3/5 lg:w-1/2 mx-auto bg-gray-600 rounded-xl p-10 space-y-5 border-slate-900 border-4 shadow-xl">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
                    Register
                </h2>
                <form onSubmit={handleRegister} className="space-y-3">
                    <div className="form-control">
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            name="photo"
                            placeholder="photo url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <button className="btn btn-ghost btn-outline text-white">Register</button>
                    </div>
                </form>
                <p className="text-center text-white">
                    Already have an account?{" "}
                    <Link className="text-slate-900 font-bold" to="/login">
                        Login
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
                                onClick={handleGoogleSignUp}
                                className="text-xs md:text-sm lg:text-base"
                            >
                                Continue with Google
                            </button>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1979}
                hideProgressBar={false}
                estOnTop={false}
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

export default Register;
