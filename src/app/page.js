import Image from "next/image";
/* import styles from "./page.module.css"; */
import Navbar from "./navbar";
export default function Home() {
  return (
    <>
      <Navbar isAdmin={false}></Navbar>
    </>
    

  );
}
