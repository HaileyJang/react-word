import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface Props {
    wordNumber: number,
    wordCount: number,
    percent: number,
    data : Array<Object>
}

export function Word(props: Props) {

    let percentGreen = {
        color: "green"
    }

    let percentRed = {
        color: "red"
    }

    const handlePercentColorChange = () => {
        if (props.percent > 0) {
            return percentGreen
        } else {
            return percentRed
        }
    }

    const handlefillColorChange = () => {
        if (props.percent > 0) {
            return "url(#colorUv)" 
        } else {
            return "url(#colorPv)" 
        }
    }


    const handleArrowColorChange = () => {
        if (props.percent > 0) {
            return <FontAwesomeIcon icon={faArrowCircleUp} color="green" size="lg" />
        } else {
            return <FontAwesomeIcon icon={faArrowCircleDown} color="red" size="lg" />
        }
    }

    return (
        <>
            <tbody>
                <tr>
                    <td>
                        Word {props.wordNumber}
                    </td>
                    <td className="bigFont">
                        <b>{props.wordCount}X</b>
                    </td>
                    
                    <td className = "subject"> 
                        <AreaChart
                            width={100}
                            height={30}
                            data={props.data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}>
                              <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="green" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="red" stopOpacity={0}/>
    </linearGradient>
  </defs>
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fill={handlefillColorChange()} />
                        </AreaChart>
                    </td><td style={handlePercentColorChange()}>
                        <b>{props.percent}%</b>
                    </td>
                    <td>
                        {handleArrowColorChange()}
                    </td>
                </tr>
            </tbody>
        </>
    )

}