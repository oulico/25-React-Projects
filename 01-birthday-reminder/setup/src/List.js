import React from 'react';

const List = ({ people }) => {
  const [human, setHuman] = React.useState();
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;

        const removeItem = (id) => {
          let newHuman = human.filter((human) => human.id !== id);
          setHuman(newHuman);
          console.log(newHuman);
        };
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
