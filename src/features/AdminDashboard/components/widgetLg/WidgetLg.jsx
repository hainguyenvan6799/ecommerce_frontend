import "./widgetlg.css";

function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={`widgetLgButton ${type}`}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transaction</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Static</th>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLgImg" />
                            <span className="widgetLgUsername">Hai Nguyen Van</span>
                        </td>
                        <td className="widgetLgDate">6 July 1999</td>
                        <td className="widgetAmount">$167.7</td>
                        <td className="widgetStatus"><Button type="Approved" /></td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLgImg" />
                            <span className="widgetLgUsername">Hai Nguyen Van</span>
                        </td>
                        <td className="widgetLgDate">6 July 1999</td>
                        <td className="widgetAmount">$167.7</td>
                        <td className="widgetStatus"><Button type="Declined" /></td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLgImg" />
                            <span className="widgetLgUsername">Hai Nguyen Van</span>
                        </td>
                        <td className="widgetLgDate">6 July 1999</td>
                        <td className="widgetAmount">$167.7</td>
                        <td className="widgetStatus"><Button type="Pending" /></td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default WidgetLg
