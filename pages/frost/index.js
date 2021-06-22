import styles from "../../styles/Frost.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: {
      frosts: data,
    },
  };
};

const Frost = ({ frosts }) => {
  return (
    <>
      <h1>Frosts</h1>
      {frosts.map((frost) => (
        <Link href={`/frost/${frost.id}`} key={frost.id}>
          <a className={styles.single}>
            <h3>{frost.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Frost;
