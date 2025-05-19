import "./Definitions.css";

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === " " ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => <div className="singleMean">

            </div>)
          )
        )
      )}
    </div>
  );
};

export default Definitions;
