import Order from "../models/Order.js"
import OrderItem from '../models/OrderItem.js';


const getAll = () => {
  return Order.find()
   
}

const create = async(data) => {
  const order = await Order.create(data);
  const items = data.items;
  data.items.map((item) => {
    const orderItem = OrderItem.create({
      order: order._id,
      product: item.product._id,
      price: item.product.price,
    });
  });

  return order;
};


const OrderService = {
  getAll,
  create
}

export default OrderService;