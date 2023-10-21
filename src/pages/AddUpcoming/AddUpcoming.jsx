import swal from "sweetalert";

const AddUpcoming = () => {
    const handleAddUpcoming = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const date = form.date.value;
        const image = form.image.value;

        const upcoming = {
            name,
            brand,
            category,
            description,
            price,
            date,
            image,
        };

        // console.log(upcoming);

        //send data to server
        fetch("https://mash-tech-server.vercel.app/upcoming", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(upcoming),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal("Upcoming Product Added", " Successful!", "success");
                }
            });
    };
    return (
        <div>
            <h2 className="text-4xl text-center font-bold pt-3">Add Product</h2>
            <form
                onSubmit={handleAddUpcoming}
                className="space-y-5 p-5 w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="brand"
                        placeholder="brand name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="category"
                        placeholder="category ex. phone, computer, etc"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="description"
                        placeholder="short description"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="price"
                        placeholder="estimated price"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <input
                        type="text"
                        name="date"
                        placeholder="release date"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="image"
                        placeholder="image URL"
                        className="input input-bordered"
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

export default AddUpcoming;
