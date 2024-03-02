import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PETS = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "fish" },
  { id: 4, name: "hamster" },
];

const PetCard = ({ name, id }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "pet",
    item: { name, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      style={{
        padding: "22px 44px",
        backgroundColor: "white",
        display: "inline",
      }}
      ref={dragRef}
    >
      {name}
      {isDragging && "Dragging"}
    </div>
  );
};

const DndLogic = () => {
  let [dropPets, setDropPets] = useState([]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "pet",
    drop: (item) => { console.log(JSON.stringify(item)) },
      // setDropPets((pets) =>
      //   !pets.includes(item) ? [...pets, item] : [...pets]
      // ),
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
      };
    },
  });

  return (
    <div style={{ backgroundColor: "black", width: "100vw", height: "250px" }}>
      <div>
        {PETS.map((p) => (
          <PetCard draggable name={p.name} id={p.id} />
        ))}
      </div>

      <div
        style={{
          backgroundColor: "grey",
          marginTop: "150px",
          width: "100vw",
          height: "250px",
        }}
        ref={dropRef}
      >
        {dropPets.map((pet) => (
          <PetCard name={pet?.name} id={pet?.id} />
        ))}
        {isOver && " Drop Here "}
      </div>
    </div>
  );
};

function Test1() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DndLogic />
      </DndProvider>
    </>
  );
}

export default Test1;
