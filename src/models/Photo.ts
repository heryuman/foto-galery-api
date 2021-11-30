import {Schema,model,Document} from 'mongoose'
//se usa String con mayuscula porqu trabajamos con mongoose
const schema = new Schema({

    title: String,
    description: String,
    imgePath:String
});

//se usa string con minuscula porque trabajamos con ts
interface PhotoI extends Document{

    title:string;
    description:string;
    imgePath:string;
}
export default model<PhotoI>('Photo',schema);