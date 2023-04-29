import React from "react";
import './Statistics.css'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const Statistics = () => {
    const data = [
        {
            name: 'Assignment 1',
            total: 60,
            result: 60,
            expectation: 1400,
        },
        {
            name: 'Assignment 2',
            total: 60,
            result: 59,
            expectation: 60,
        },
        {
            name: 'Assignment 3',
            total: 60,
            result: 60,
            expectation: 60,
        },
        {
            name: 'Assignment 4',
            total: 60,
            result: 60,
            expectation: 60,
        },
        {
            name: 'Assignment 5',
            total: 60,
            result: 60,
            expectation: 60,
        },
        {
            name: 'Assignment 6',
            total: 60,
            result: 54,
            expectation: 58,
        },
        {
            name: 'Assignment 7',
            total: 60,
            result: 60,
            expectation: 60,
        },
        {
            name: 'Assignment 8',
            total: 60,
            result: 60,
            expectation: 60,
        },
        {
            name: 'Assignment 9',
            total: 60,
            result: 30,
            expectation: 30,
        },
        {
            name: 'Assignment 10',
            total: 60,
            result: 60,
            expectation: 60,
        },
    ];
    return (
        <div className="chart-container" width="100%" height="100%">
            <h1>My progress on Assignment marks in PH Web Dev Course</h1>
            <div className="chart">
                <AreaChart
                    width={1000}
                    height={450}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="result" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;