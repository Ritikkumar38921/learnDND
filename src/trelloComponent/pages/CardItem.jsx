
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd';

function CardItem({id ,title,desc}) {

  let [{isDragging},drag] = useDrag(() => ({
    type : "orders",
    item : { id : id ,title : title , desc : desc} ,
    collect: (monitor) => ({
      isDragging : monitor.isDragging(),
    }),
    end : (dragItem,monitor) => {
      console.log({dragItem : dragItem});

      console.log( "drag End Result : ",  monitor.getDropResult() );

    }
  }))


  let opacity = isDragging ? '0.5' : 1;

  return (
      <div ref={drag}>
        <Card sx={{opacity : opacity}}> 
            <CardContent>
              <Typography>{title}</Typography>
              <Typography>{desc}</Typography>
            </CardContent>
        </Card>
      </div>
  )
}

export default CardItem;