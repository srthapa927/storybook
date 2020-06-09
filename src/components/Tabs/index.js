import React, { Component, Children } from 'react';
import './tabs.scss';

function Tab({ tab, children, ...rest }) {
  return (
    <div tab={tab} {...rest}>
      {children}
    </div>
  );
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children && this.props.children[0].props.tab,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ul className="tab-list">
          {Children.map(children, (child) => {
            const { tab } = child.props;
            return (
              <li
                key={tab}
                className={
                  activeTab === tab
                    ? 'tab-list-item tab-list-active'
                    : 'tab-list-item'
                }
                onClick={() => onClickTabItem(tab)}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <div className="tab-content">
          {Children.map(children, (child) => {
            if (child.props.tab !== activeTab) return null;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export { Tab, Tabs };
