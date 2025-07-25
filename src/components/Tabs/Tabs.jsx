export const Tabs = ({ tabs, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="block" data-cy="TabContent">
      {activeTab.content}
    </div>
  );
};
