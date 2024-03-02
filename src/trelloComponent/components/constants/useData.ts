import React from 'react'
import {ColumnTypes} from "./enums.ts";

function useData() {

    let data = [
        { id : 1 , title : "header 1" , desc : "this is header 1" , column : ColumnTypes.orders , createdAt : new Date() + '' },
        { id : 2 , title : "header 2" , desc : "this is header 2" , column : ColumnTypes.orders , createdAt : new Date() + '' },
        { id : 3 , title : "header 3" , desc : "this is header 3" , column : ColumnTypes.orders , createdAt : new Date() + '' },
        { id : 4 , title : "header 4" , desc : "this is header 4" , column : ColumnTypes.orders , createdAt : new Date() + '' },
        { id : 5 , title : "header 5" , desc : "this is header 5" , column : ColumnTypes.orders , createdAt : new Date() + '' },
        { id : 6 , title : "header 6" , desc : "this is header 6" , column : ColumnTypes.orders , createdAt : new Date() + '' },
        { id : 7 , title : "header 7" , desc : "this is header 7" , column : ColumnTypes.orders , createdAt : new Date() + '' }
    ]

  return data;

}

export default useData