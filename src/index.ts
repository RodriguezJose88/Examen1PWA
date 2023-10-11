import app from "./config/express";
import userRoutes from './routes/routes';

const main = () => {
    try {
        app.listen(3000)
        console.log("server runnig")
    } catch (error) {
        console.log(error)
    }
}
app.use(userRoutes);
main();