import swal from "sweetalert";
import "animate.css";

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const Product = {
            name,
            brand,
            category,
            description,
            price,
            rating,
            image,
        };

        console.log(Product);

        //send data to server
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(Product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal.fire({
                        title: "Product Added Successfully",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    });
                }
            });
    };
    return (
        <div>
            <h2 className="text-4xl text-center font-bold pt-3">Add Product</h2>
            <form
                onSubmit={handleAddProduct}
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
                        placeholder="price"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <input
                        type="text"
                        name="rating"
                        placeholder="rating"
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

export default AddProduct;
