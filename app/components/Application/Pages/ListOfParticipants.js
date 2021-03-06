import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
  customWidth: {
   width: 150,
 },

};
export default class UserProfiles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }
  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
        <div>
        <h2>Katılımcı Listesi</h2>
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Sıralama Türü" />
          <MenuItem value={2} primaryText="Büyükden Küçüğe" />
          <MenuItem value={3} primaryText="Küçükden Büyüğe" />
        </SelectField>
      </div>
      <br/>
      <div>
        <Table>
          <TableHeader>
           <TableRow>
             <TableHeaderColumn>Puan</TableHeaderColumn>
             <TableHeaderColumn>Ad Soyad</TableHeaderColumn>
             <TableHeaderColumn>Yanıtlanan Soru Seti</TableHeaderColumn>
           </TableRow>
          </TableHeader>
          <TableBody>
           <TableRow>
             <TableRowColumn>1</TableRowColumn>
             <TableRowColumn>Ayşe Ak</TableRowColumn>
             <TableRowColumn>Set 1</TableRowColumn>
           </TableRow>
           <TableRow>
             <TableRowColumn>2</TableRowColumn>
             <TableRowColumn>Ali Yılmaz</TableRowColumn>
             <TableRowColumn>Set 2</TableRowColumn>
           </TableRow>
           <TableRow>
             <TableRowColumn>3</TableRowColumn>
             <TableRowColumn>Zehra Kıgız</TableRowColumn>
             <TableRowColumn>Set 2</TableRowColumn>
           </TableRow>
          </TableBody>a
          </Table>
      </div>
      <span>Kişi seçilince bilgileri ve yanıtladığı soru seti görülmeli</span>
      </div>
    );
  }
}
