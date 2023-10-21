import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className="flex flex-col justify-center items-center font-semibold text-xl md:text-3xl lg:text-5xl h-screen gap-10">
                <p>Sorry, an unexpected error has occurred.</p>
                {error.status === 404 ? (
                    <div>
                        <img
                            className="w-1/4 mx-auto"
                            src="https://i.ibb.co/NnJvNX8/404error.jpg"
                            alt="404 error"
                        />
                    </div>
                ) : (
                    <div></div>
                )}
                <p>
                    <i>
                        {error.status} {error.statusText || error.message}
                    </i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
