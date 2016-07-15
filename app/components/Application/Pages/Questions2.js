import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Slider from 'material-ui/Slider';
import LinearProgress from 'material-ui/LinearProgress';
import QuestionRadioButton from '../../components/QuestionRadioButton'

const questions = {
  1: {
    title: "Aşağıdakilerden hangisinde daha iyisiniz?",
    answers: [
      { title: "front end", value: 1},
      { title: "back end", value: 2},
      { title: "sistem yönetimi", value: 3}
    ],
    id: 1,
    type: "radioButton"
  },
  2: {
    title: "Aşağıdakilerden hangisinde daha kötüsünüz?",
    answers: [
      {title:"JavaScript", value: 1},
      {title:"Scala", value: 2},
      {title:"Haskell", value: 3},
      {title: "Java", value: 4}
    ],
    id: 2,
    type: "radioButton"
  },
}

const styles = {
  button:{
    marginRight: 12,
  },
  position: 'absolute',
  display: 'inline-block',
  alignItems: 'center',
  marginLeft: 250

  };
export default React.createClass({
  render() {

    return (<MuiThemeProvider>
        <div>
        <br/>
               <LinearProgress mode="determinate" value={20} />

        <div style={styles}>

          <h3>Sorular</h3>
            <div>
            <QuestionRadioButton questionId={questions[1].id} question={questions[1].title} answers={questions[1].answers}/>
              <QuestionRadioButton questionId={questions[2].id} question={questions[2].title} answers={questions[2].answers}/>
            </div>
            <br/><br/><br/>
            <div style={styles.button}>
            <Link to="/questions3"><RaisedButton label="İleri" primary={true}/></Link>

            </div>

        </div>
</div>
      </MuiThemeProvider>
    )}
})
