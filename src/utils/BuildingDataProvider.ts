import { useState, useEffect } from 'react';
import data from "../data/building.json"
interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  useEffect(()=>{

    setBuildingData(data)
  },[])
  //FILL HERE LOGIC TO SET THE BUILDING DATA

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    
    const floor = buildingData[floorIndex]
    return floor
    //FILL HERE
  }
  const getListOfActivities = ():string[]=>{
    return [""]
    //FILL HERE
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
