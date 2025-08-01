import Navbar from "@/components/Navbar";
import '../styles/globals.css'; // Import global CSS
import { Provider } from "react-redux";
import reduxStore from "@/redux/store";
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
