module.exports = mongoose => {

    //Item Schema
    const schema = mongoose.Schema(
      {
        name: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        size: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const newItem = mongoose.model("allitems", schema);
    return newItem;
  };