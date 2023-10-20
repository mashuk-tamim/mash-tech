import Swal from "sweetalert2";

const AddBlog = () => {
    const handleAddBlog = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const title = form.title.value;
        const body = form.body.value;
        const image = form.image.value;

        const newBlog = {
            name,
            title,
            body,
            image,
        };

        //send data to server
        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newBlog),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Blog Added Successfully",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    });
                }
                form.reset();
            });
    };
    return (
        <div>
            <h2 className="text-4xl text-center font-bold pt-3">Add Blog</h2>
            <form
                onSubmit={handleAddBlog}
                className="space-y-5 p-5 w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        placeholder="author name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="body"
                        placeholder="blog body"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="image"
                        placeholder="image URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="">
                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-success w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
