import swal from "sweetalert";

const AddBrand = () => {
    const handleAddBrand = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const logo = form.logo.value;
        const bannerOne = form.bannerOne.value;
        const bannerTwo = form.bannerTwo.value;
        const bannerThree = form.bannerThree.value;

        const brand = {
            name,
            logo,
            bannerOne,
            bannerTwo,
            bannerThree,
        };

        //send data to server
        fetch("https://mash-tech-server.vercel.app/brands", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(brand),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal("Brand Added", " Successful!", "success");
                    form.reset();
                }
            });
    };
    return (
        <div>
            <h2 className="text-4xl text-center font-bold pt-3">Add Brand</h2>
            <form
                onSubmit={handleAddBrand}
                className="space-y-5 p-5 w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        placeholder="brand name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="logo"
                        placeholder="logo url"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="bannerOne"
                        placeholder="first banner url"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="bannerTwo"
                        placeholder="second banner url"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="bannerThree"
                        placeholder="third banner url"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="">
                    <input
                        type="submit"
                        value="Add Brand"
                        className="btn btn-ghost btn-outline w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddBrand;
