import Chart from 'features/AdminDashboard/components/chart/Chart'
import FeaturedInfo from 'features/AdminDashboard/components/featuredInfo/FeaturedInfo'
import WidgetLg from 'features/AdminDashboard/components/widgetLg/WidgetLg';
import WidgetSm from 'features/AdminDashboard/components/widgetSm/WidgetSm';
import React from 'react'
import "./homedashboard.css"

const data = [
    {
        name: 'Page A',
        "Active User": 4000,
    },
    {
        name: 'Page B',
        "Active User": 3000,
    },
    {
        name: 'Page C',
        "Active User": 2000,
    },
    {
        name: 'Page D',
        "Active User": 2780,
    },
    {
        name: 'Page E',
        "Active User": 1890,
    },
    {
        name: 'Page F',
        "Active User": 2390,
    },
    {
        name: 'Page G',
        "Active User": 3490,
    },
];

const HomeDashboard = () => {
    return (
        <div className="home-dashboard">
            <FeaturedInfo />
            <Chart data={data} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default HomeDashboard
