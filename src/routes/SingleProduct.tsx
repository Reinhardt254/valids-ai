import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { products } from "../lib/dummyData";
import { useNavigate } from "react-router-dom";
import { useCart } from "../lib/store";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  reviews: Review[];
  category: string;
  subCategory: string;
  tags: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  isBestSeller?: boolean;
}

interface Review {
  id: number;
  rating: number;
  comment: string;
  date: string;
  name: string;
  email: string;
  image: string;
}

export function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product: Product) => {
   const existingItem = cartItems.find((i: Product) => i.id === product.id);
   if (existingItem) {
    toast.error("Item already in cart");
    return;
   }
   try {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });

    toast.success("Product added to cart");
   } catch (error) {
    toast.error("Failed to add product to cart");
    console.error(error);
   }
  };     

  if (!id) {
    return <div>Product not found</div>;
  }

  const product = products.find(
    (product: Product) => product.id === parseInt(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter(
    (items: Product) => items.category === product?.category && items.id !== product.id
  );

  return (
    <div className="container mx-auto px-4 pb-8 w-full flex justify-center items-center">
      <Toaster />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col">
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded-sm mb-4"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>

            <p className="text-gray-600 mb-2">
              {" "}
              <span className="font-bold">Category:</span> {product.category}
            </p>
            <p className="text-gray-600 mb-2">
              {" "}
              <span className="font-bold">Sub Category:</span>{" "}
              {product.subCategory}
            </p>

            <div className="flex flex-wrap gap-2 py-3">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 mb-2">{product.description}</p>

            <div className="reviews">
              <h3 className="text-lg font-semibold mb-2">Reviews</h3>
              <div className="review-list">
                {product.reviews.map((review: Review) => (
                  <div key={review.id}>
                    <div className="review-item border-b border-gray-200 pb-4 mb-4">
                      <div className="review-header">
                        <div className="review-rating">
                          <div className="star">
                            <span className="text-sm text-gray-500">
                              Rating: {review.rating}
                            </span>
                            <div className="star-group flex mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <div
                                  key={star}
                                  className="mr-1 h-5 w-5 rounded-full"
                                >
                                  <Star
                                    className={`mask mask-star-2 h-5 w-5 ${
                                      star <= Math.floor(review.rating)
                                        ? "text-orange-400"
                                        : "text-gray-200"
                                    }`}
                                  ></Star>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-body">
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                    <div className="review-footer">
                      <p className="text-gray-600">{review.date}</p>
                      <p className="text-gray-600">{review.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-2xl font-semibold mb-2 py-4">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {relatedProducts.length === 0 && (
                <div className="text-center text-gray-500">
                  No related products found
                </div>
               )}
              {relatedProducts.map((product: Product) => (
                <div onClick={() => navigate(`/product/${product.id}`)} key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-sm mb-4"
                  />
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-2">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
