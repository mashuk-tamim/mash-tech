import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    console.log("product", product);
    const { _id, name, brand, category, price, rating, image } = product;

    // console.log(_id, name, brand, category, price, rating, image);

    const handleUpdateProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        // const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updatedProduct = {
            name,
            brand,
            category,
            // description,
            price,
            rating,
            image,
        };

        console.log(updatedProduct);

        fetch(
            `https://mash-tech-server-drq2abpar-mashuk-tamims-projects.vercel.app/products/${_id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Product Updated Successfully",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    });
                    window.history.back();
                }
            });
    };
    return (
        <div>
            <h2 className="text-4xl text-center font-bold pt-3">
                Update Product
            </h2>
            <form
                onSubmit={handleUpdateProduct}
                className="space-y-5 p-5 w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        placeholder="name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="brand"
                        defaultValue={brand}
                        placeholder="brand name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="category"
                        defaultValue={category}
                        placeholder="category ex. phone, computer, etc"
                        className="input input-bordered"
                    />
                </div>
                {/* <div className="form-control">
                    <input
                        type="text"
                        name="description"
                        placeholder="short description"
                        className="input input-bordered"
                    />
                </div> */}
                <div className="form-control">
                    <input
                        type="text"
                        name="price"
                        defaultValue={price}
                        placeholder="price"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <input
                        type="text"
                        name="rating"
                        defaultValue={rating}
                        placeholder="rating"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="image"
                        defaultValue={image}
                        placeholder="image URL"
                        className="input input-bordered"
                    />
                </div>
                <div className="">
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-ghost btn-outline btn-md w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
