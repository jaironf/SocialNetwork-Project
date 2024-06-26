const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Por favor, inserte un título'],
    },
    body: {
        type: String,
        required: [true, 'Por favor, inserte una descripción']
    },
    img: {
        type: String,
        // likes: [{type: ObjjectId, ref: 'User'}],
        // userId: [{type: ObjectId, ref: 'User'}]
        //commentIds: [{type: ObjectId, ref: 'Comment'}]
    
    },
       userId: {type: ObjectId, ref: 'User'},
   
        commentsIds: [{type: ObjectId, ref: 'Comment'}],
        body: String,

     likes: [{ type: ObjectId }],
}, {timestamps: true});

PostSchema.index({
    title: 'text',
});

const Post = mongoose.model('Post', PostSchema);





module.exports = Post;

