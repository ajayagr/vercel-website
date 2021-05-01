import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  //Hello world!
  let envName = process.env.NEXT_PUBLIC_MY_NAME;
  // console.log(envName);
  return <h2>Hello World!!</h2>;
}
