import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Mansoor Hussain - Passionate full stack and DevOps Engineerr",
  description:
    "My name is Mansoor Hussain. A passionate Full Stack Software Developer 🚀 with experience in building Web and Mobile applications using JAVASCRIPT, SEMANTIC UI, HEROKU, NODE.JS, BOOTSTRAP, FIREBASE, EXPRESS.JS, MATERIAL UI, NGINX, JQUERY, GIT, REACT, MONGODB, REDUX, GITHUB, REACT NATIVE, GOOGLE CLOUD, Python, Flask, Docker, Kubernetes, Jenkins, Postgres, BigQuery, AWS, and some other cool libraries and frameworks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
