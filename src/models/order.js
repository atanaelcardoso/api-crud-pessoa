({
  number: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    required: true,
    defult: Date.now
  },
  status: {
    type: String,
    required: true,
    enum: ['created', 'done'],
    defult: 'created'
  },
  Items: [{
    number: {
      type: Number,
      required: true,
      default: 1
    },
    price: {
      type: Number,
      required: true
    }
  }],
});