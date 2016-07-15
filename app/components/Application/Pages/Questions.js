import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Slider from 'material-ui/Slider';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import QuestionYesNo from '../../components/QuestionYesNo'

const questions = {
  1: {
    title: "Aşağıdakilerden hangisinde daha iyisiniz?",
    id: 1,
    type: "radioButtonTwoUp",
  },
  2: {
    title: "Aşağıdakilerden hangisinde daha kötüsünüz?",
    id: 2,
    type: "radioButtonTwoUp",
  },
  answers: [
    {title: "yes", value: 1},
    {title: "no", value: 2}
  ]
}

const styles = {
  button:{
    marginRight: 12,
  },
  position: 'absolute',
  display: 'inline-block',
  alignItems: 'center',
  marginLeft: 250,
  };
export default React.createClass({
  render() {
    return (<MuiThemeProvider>
        <div>
          <div style={styles}>
            <h3>Sorular</h3>
          </div>
          <QuestionYesNo questionId={questions[1].id} question={questions[1].title} answers={questions.answers}/>
            <QuestionYesNo questionId={questions[2].id} question={questions[2].title} answers={questions.answers}/>
          <br/><br/><br/><br/>
            <div>
              <span>Klavyeden evet için <b>"e"</b> hayır için <b>"h"</b> tuşlarını kullanabilirsiniz.</span>
            </div>
        </div>
      </MuiThemeProvider>
    )}
})