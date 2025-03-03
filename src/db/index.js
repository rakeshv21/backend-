import mongoose from " mongoose";
import { DB_NAME} from "../constants.js";

const connectDB = async () => {

    try {
        const connectionresponse = await mongoose.coonect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)

        console.log(`\n mongodb connected ${connectionresponse.connection.host}`)
    } catch (error) {
        console.log("mondb connection error" , error);
        process.exit(1)
    }
}

export default connectDB