import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Area, AreaChart } from 'recharts';

interface Props {
    wordNumber: number,
    wordCount: number,
    percent: number,
}

export function Word(props: Props){

    const handleColorChange = () => {
        if (props.percent > 0){
            return "green"
        } else {
            return "Blue"
        }
    }
    
    const data = [
        {name: "a", value: 3000}, {name: "b", value: 4000}, {name: "c", value: 3000}, {name: "d", value: 3000}
      ];

    return (
    <>
        <tbody>
          <tr>
            <td>
                Word {props.wordNumber}
            </td>
            <td className = "bigFont">
                <b>{props.wordCount}X</b>
            </td>
            <td color = {handleColorChange()}>
                {props.percent}%
            </td>
            <td>
            <AreaChart
          width={100}
          height={20}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}>
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
            </td>
            <td>
                <FontAwesomeIcon icon = {faArrowCircleUp} color= "green" size = "lg"/>
            </td>
        </tr>
        </tbody>
    </>
    )
    
}