import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TreeSelect} from 'antd';
import classes from './TreeSelect.module.css';

const {TreeNode} = TreeSelect;

const Demo = () => {
  const [value, setValue] = useState(undefined);
  const onChange = () => {
    setValue(value);
  };
  return (
    <TreeSelect
      showSearch
      style={{width: '100%'}}
      value={value}
      dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}>
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode value="parent 1-0" title="parent 1-0">
          <TreeNode value="leaf1" title="leaf1" />
          <TreeNode value="leaf2" title="leaf2" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1">
          <TreeNode
            value="leaf3"
            title={<b style={{color: '#08c'}}>leaf3</b>}
          />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  );
};

Demo.propTypes = {
  /**
   * Here you can use propTypes to define properties and modify them
   */
};

export default Demo;
