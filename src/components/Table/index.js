import React, { Component, Children } from 'react';
import './table.scss';

export function TableHeader({ dataField, dataFormat }) {
  return <div dataField={dataField} data={dataFormat} />;
}

export default class Table extends Component {
  getFields = () => {
    const numberOfChildren = Children.count(this.props.children);
    if (numberOfChildren > 0) {
      const fields = Children.map(
        this.props.children,
        (child) => child.props.dataField
      );

      return fields;
    }
    return Object.keys(this.props.data[0]);
  };

  getHeaderData = (field) => {
    const numberOfChildren = Children.count(this.props.children);
    if (numberOfChildren > 0) {
      const tableChildren = Children.toArray(this.props.children);
      const tableChildWithSameFieldAndDataHeader = tableChildren.find(
        (child) =>
          child.props.dataField === field &&
          child.props.hasOwnProperty('dataHeader')
      );

      if (!!tableChildWithSameFieldAndDataHeader) {
        return tableChildWithSameFieldAndDataHeader.props.dataHeader;
      }

      return field;
    }

    return field;
  };

  getBodyCellData = (row, field) => {
    const numberOfChildren = Children.count(this.props.children);
    if (numberOfChildren > 0) {
      const tableChildren = Children.toArray(this.props.children);
      const tableChildWithSameFieldAndDataFormat = tableChildren.find(
        (child) =>
          child.props.dataField === field &&
          child.props.hasOwnProperty('dataFormat')
      );

      if (!!tableChildWithSameFieldAndDataFormat) {
        return tableChildWithSameFieldAndDataFormat.props.dataFormat(
          row,
          row[field]
        );
      }

      return row[field];
    }

    return row[field];
  };

  renderHeader = () => {
    const fields = this.getFields();

    return fields.map((field, index) => {
      return <th key={field}>{this.getHeaderData(field).toUpperCase()}</th>;
    });
  };

  renderRow = () => {
    const items = this.props.data;
    const fields = this.getFields();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          {fields.map((field) => {
            return <td key={row[field]}>{this.getBodyCellData(row, field)}</td>;
          })}
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{this.renderHeader()}</tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }
}
