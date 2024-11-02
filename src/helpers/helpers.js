// data
import Papa from "papaparse";
import usages from '../mockData/usages.csv'
import costs from '../mockData/costs.csv'

const commonPart = async (props)=> {
    const response = await fetch(props);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder("utf-8").decode(result.value);
    return Papa.parse(decoder);
}

export const getUsages = async()=> {
    return commonPart(usages)
}

export const getCosts = async()=> {
    return commonPart(costs)
}