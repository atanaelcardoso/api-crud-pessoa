exports.createTable = async(data) => {
  var res = new Order
    .find({}, 'number status customer items')
    .populate('customer', 'name')
    .populate('items-product', 'title');
  return res;
}

exports.selectPessoas = async(data) => {
  var order = new Order(data);
  await order.save();
}