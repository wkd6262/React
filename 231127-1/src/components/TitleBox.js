import titleStyle from "../styles/TitleBox.module.css";

const TitleBox = () => {
  return (
    <section className={titleStyle.titleWrapper}>
      <h2 className={titleStyle.title}>
        We are
        <br />
        Creative
        <br />
        Agency
      </h2>
      <p>Working with brands all over the world</p>
    </section>
  );
};

export default TitleBox;
