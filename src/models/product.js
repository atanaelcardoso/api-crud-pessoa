
({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'O slug é obrigatório'],
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    defult: true
  },
  tags: [{
    type: String,
    required: true
  }],
  image: {
    type: String,
    required: true,
    trim: true
  }
});
