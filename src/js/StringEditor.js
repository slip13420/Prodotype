import React from 'react';
import TextField from 'material-ui/TextField';
import PropEditorBase from './PropEditorBase'

export default class StringEditor extends React.Component {
  render() {
    return <PropEditorBase onChange={this.props.onChange} data={this.props.data}>
      <TextField
        value={ this.props.data.value || '' }
        floatingLabelText={ this.props.data.name }
        floatingLabelFixed={true}
        name="InputValue"
        onChange={(e) => this.props.onChange(e.target.value)}
      />
    </PropEditorBase>;
  }
}
