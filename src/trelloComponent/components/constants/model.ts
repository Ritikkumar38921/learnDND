
import {ColumnTypes} from  "./enums.js"

export interface card {
    id : string,
    title : string,
    desc : string,
    column : ColumnTypes,
    createdAt : string,
}