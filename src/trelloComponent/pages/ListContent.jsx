import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { useDrop } from "react-dnd";

function ListContent({ data , setData , column, children }) {

  console.log("column : ", column);
  console.log("children : " , children); 

 
  const updateData = (d,id) => {
    let temp = [...d];
    let dragObj = temp.filter((d) => d.id === id);

    temp = temp.filter((d) => d.id !== id);

    console.log("dragObj : " , dragObj);

    let obj ={...dragObj[0] , column };
    temp.push(obj);

    return [...temp];
  }

  let [{canDrop},dropId] = useDrop({
    accept : "orders",
    drop : (item,monitor) => {

      let d = updateData(data,item?.id);

      console.log("ans : " , d);

      setData([...d]);
    },
    collect : (monitor) => ({ canDrop : monitor.canDrop()  }),
  });

  return (
    <div ref={dropId} style={{ width: "100%", maxWidth: 360, bgcolor: "#408080"}} >
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#408080" }}>
          {/* {
                list.map((row) => (
                <ListItem sx={{bgcolor:"white", color : "black" , boxShadow :'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <ListItemText primary={row?.title} secondary={row?.title} />
                </ListItem>
                ))
            } */}
          <ListItemText sx={{color : "white" , padding : "10px"}} primary={column} />
          <div style={{backgroundColor : "violet" , color : "white" }}>{canDrop && 'Drop Here'}</div>
          <div style={{marginLeft : "auto" , marginRight : "auto" , width : "90%" ,display : "flex" , flexDirection : "column" , gap : "6px" , justifyContent :"space-between"}}>{children}</div>
        </List>
    </div>
  );
}

export default ListContent;
