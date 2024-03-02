import React, { useEffect, useState } from 'react'
import useData from './components/constants/useData.ts';
import { ColumnTypes } from './components/constants/enums.ts';
import ListContent from "./pages/ListContent.jsx";
import CardItem from './pages/CardItem.jsx';

function CallOrderData(){
  return useData();
}

function App() {

  const [data,setData] = useState([]);
  let {orders,inprogress,delivered,returned} = ColumnTypes;

  // console.log( " orders :  " , orders);
  // console.log( " inprogress :  " , inprogress);
  // console.log( " delivered :  " , delivered);
  // console.log( " returned :  " , returned);
  
  useEffect(() => {
    let d = CallOrderData();
    setData(d);
  }, []);

  const columnData = (columnName) => {
    return data.filter((d) => ( d.column === columnName )).map((d) => (
      // <Card>
      //   <CardContent>
      //     <Typography>{d?.title}</Typography>
      //     <Typography>{d?.desc}</Typography>
      //   </CardContent>
      // </Card>
      <CardItem  id={d?.id} title={d?.title} desc={d?.desc} />
    ))
  }

  console.log( " orders :  " , orders);
  console.log( " inprogress :  " , inprogress);
  console.log( " delivered :  " , delivered);
  console.log( " returned :  " , returned);

  return (
    <div style={{display:"flex",gap : "10px"}}>
      <ListContent data={data} setData={setData} column={orders}>{columnData(orders)}</ListContent>
      <ListContent data={data} setData={setData} column={inprogress}>{columnData(inprogress)}</ListContent>
      <ListContent data={data} setData={setData} column={delivered}>{columnData(delivered)}</ListContent>
      <ListContent data={data} setData={setData} column={returned}>{columnData(returned)}</ListContent>
    </div>
  )
}

export default App