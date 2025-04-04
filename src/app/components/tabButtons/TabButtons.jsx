import "./tabButtons.css";

const TabButtons = ({portfolioItems, activeTab, setActiveTab}) => {
  return (
    <>
    <div className="tab-header">
      {portfolioItems.map((item, index) => (
        <li key={item.work} className={`${index===activeTab && "activeButon"} tab-button`} onClick={() => setActiveTab(index)}>
         {item.work}
        </li>
      ))}
    </div>
    </>
  )
}
export default TabButtons