/* eslint-disable react/no-unknown-property */
import Swal from 'sweetalert2'
const AddProducts = () => {

    const handleAddproduct = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const brand = form.brandName.value
        const description = form.description.value
        const image = form.image.value
        const price = form.price.value
        const rating = form.rating.value
        const type = form.type.value
        const product = {name, description, image, price, rating, type, brand}
        console.log(product);
        
        fetch("http://localhost:5001/products", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Swal.fire(
            'Good job!',
            'Product added successfully!',
            'success'
          )
          form.reset()
        })
        
    }

    return (
        <div>
            {/* <div className="text-center mt-12">
                <h1 className="text-4xl font-bold">Add Your Product</h1>
            </div> */}

            
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-gray-600">Add Your Product</h2>
      

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Products Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <form method="POST" onSubmit={handleAddproduct} class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Product Name</label>
                <input required type="text" name="name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Product Name" />
              </div>

              <div class="md:col-span-5">
                <label for="email">Short description</label>
                <input required type="text" name="description" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Short description" />
              </div>

              <div class="md:col-span-3">
                <label for="address">Image</label>
                <input required type="text" name="image" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Image URL" />
              </div>

              <div class="md:col-span-2">
                <label for="city">Type of product</label>
                <input required type="text" name="type" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Phone, Computer etc" />
              </div>

              <div class="md:col-span-2">
                <label for="country">Brand name</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input required name="brandName" id="country" placeholder="Brand name" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                  
                </div>
              </div>

              

              <div class="md:col-span-1">
                <label for="zipcode">Price</label>
                <input required type="text" name="price" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
              </div>
              <div class="md:col-span-1">
                <label for="zipcode">Rating</label>
                <input required type="text" name="rating" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add product</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
        </div>
    );
};

export default AddProducts;