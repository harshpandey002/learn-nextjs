import styles from "../../styles/Frost.module.css";

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
        <div key={frost.id}>
          <a className={styles.single}>
            <h3>{frost.name}</h3>
          </a>
        </div>
      ))}
    </>
  );
};

export default Frost;
