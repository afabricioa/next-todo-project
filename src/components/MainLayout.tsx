import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from "../styles/MainLayout.module.css";
import Todos from "../pages/todos";

export default function MainLayout({children}){
    return (
        <>
            <Navbar />
            <div className={styles.layout}>{children}</div>
            <Footer />
        </>
    )
}