import React from "react";

const CartDropdown = () => {
  const cartItems = [
    {
      id: 1,
      title: "REGULAR FIT T-SHIRT",
      color: "Purple",
      size: "S",
      quantity: 1,
      price: "399.00",
      total: "399.00",
      image:
        "https://image.hm.com/assets/hm/20/fa/20faf5a88c83cad69cd50b45d69c4e9284f433a4.jpg?imwidth=264",
    },
    {
      id: 2,
      title: "SLIM FIT COTTON SHIRT",
      color: "White",
      size: "M",
      quantity: 2,
      price: "1299.00",
      total: "2598.00",
      image:
        "https://image.hm.com/assets/hm/44/42/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg?imwidth=264",
    },
    {
      id: 3,
      title: "RELAXED FIT HOODIE",
      color: "Black",
      size: "L",
      quantity: 1,
      price: "1999.00",
      total: "1999.00",
      image:
        "https://image.hm.com/assets/hm/27/37/27371510657af76474658acf192817bd8632ae8c.jpg?imwidth=264",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = 149; // or 0 if you want conditional logic

  return (
    <div className="absolute right-0 top-full mt-2 w-[320px] bg-white shadow-md border z-50 hidden group-hover:block">
      {cartItems.length > 0 ? (
        <div className="p-4">
          {/* Product Details */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 mb-4">
              <img src={item.image} className="w-20 h-24 object-cover" />
              <div className="text-sm  text-left">
                <p className="font-helvetica-medium text-gray-800 font-normal text-[15px] tracking-wider ">
                  {item.title}
                </p>
                <p className="font-helvetica-light font-bold text-[15px] tracking-wider">
                  Rs.{item.total}
                </p>
                <p>Colour: {item.color}</p>
                <p>Size: {item.size}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="text-sm mt-2 border-t pt-2">
            <div className="flex justify-between">
              <span>Order value</span>
              <span>Rs.{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated delivery fee</span>
              <span>Rs.{deliveryFee}</span>
            </div>
            <div className="flex justify-between font-bold mt-1">
              <span>TOTAL</span>
              <span>Rs.{subtotal + deliveryFee}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <button className="bg-black text-white w-full py-2 text-sm">
              CHECKOUT
            </button>
            <button className="border mt-2 w-full py-2 text-sm">
              SHOPPING BAG
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 text-sm">
          <p className="mb-4 text-center">YOUR SHOPPING BAG IS EMPTY</p>
          <button className="bg-black text-white w-full py-2">
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
