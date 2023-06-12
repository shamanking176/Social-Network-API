const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
const thoughtSchema = new Schema(
  {
thoughtText:{
    type:String,
    maxlength: 280,
    required: true,
},
username:{
    type:String,
    required: true,
},
createdAt: {
    type: Date,
    default: Date.now,
  },
reactions:[reactionSchema]
  },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  const Thought = model('thoughts', thoughtSchema);
  
  module.exports = Thought;
  