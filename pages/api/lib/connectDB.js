import mongoose from 'mongoose'

const connectDB=()=>{
    if(mongoose.connections[0].readyState){
        console.log('Ya esta conectado');
        return;
    }
    mongoose.connect(process.env.MONGODB_URI,{},err=>{
        if(err) throw err;
        console.log("COneccion satisfactoria")
    })
}
export default connectDB;