import "./widgetLg.css";
function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Lastest Transactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cusomer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://w0.peakpx.com/wallpaper/533/571/HD-wallpaper-sanjar-bey-buyuk-selcuklu-dark-hood-malik-shah-rises-sultan-the-great-seljuk-theme.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Ahmad Sanjar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2020</td>
          <td className="widgetLgAmount">$200.15</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Approved" />{" "}
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://w0.peakpx.com/wallpaper/533/571/HD-wallpaper-sanjar-bey-buyuk-selcuklu-dark-hood-malik-shah-rises-sultan-the-great-seljuk-theme.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Ahmad Sanjar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2020</td>
          <td className="widgetLgAmount">$200.15</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Declined" />{" "}
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://w0.peakpx.com/wallpaper/533/571/HD-wallpaper-sanjar-bey-buyuk-selcuklu-dark-hood-malik-shah-rises-sultan-the-great-seljuk-theme.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Ahmad Sanjar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2020</td>
          <td className="widgetLgAmount">$200.15</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Approved" />{" "}
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://w0.peakpx.com/wallpaper/533/571/HD-wallpaper-sanjar-bey-buyuk-selcuklu-dark-hood-malik-shah-rises-sultan-the-great-seljuk-theme.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Ahmad Sanjar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2020</td>
          <td className="widgetLgAmount">$200.15</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Pending" />{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
