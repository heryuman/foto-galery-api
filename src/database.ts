import{ connect } from 'mongoose';


export async function startConnection(){


     await connect('mongodb://localhost/phto-gallery-db')

     console.log('Database is connected');


}
