export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { frost: data },
  };
};

const Details = ({ frost }) => {
  return (
    <div>
      <h1>{frost.name}</h1>
      <p>{frost.email}</p>
      <p>{frost.website}</p>
      <p>{frost.address.city}</p>
    </div>
  );
};

export default Details;
