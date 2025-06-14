import Image from "next/image";
import Navbar from "../navbar";
/* import styles from "./page.module.css"; */
export default function adminIndex() {
  return (
    <>
      <Navbar isAdmin={true} ></Navbar>
    </>
  );
}
