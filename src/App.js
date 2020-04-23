import React, { Component } from 'react';
import './App.css';
import Allcolor from './color'

class App extends Component {
  state = { 
    selectcolorpick:'',
    darker:false
   }

   renderselectcolor=()=>{
     return (
       <div>
         <select name="selectcolor" id="colorid" onChange={(e)=>{this.setState({selectcolorpick:e.target.value})}}>
                    <option></option>
                    <option value='allcolor'>All color</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="brown">Brown</option>
                    <option value="grey">Grey</option>
                    <option value="purple">Purple</option>
                    <option value="black">Black</option>
                    <option value="aquablue">Aquablue</option>
                    <option value="burlywood">burlywood</option>
                    <option value="coral">Coral</option>
                    <option value="chocolate">chocolate</option>
                    <option value="chartreuse">chartreuse</option>
                    <option value="crimson">Crimson</option>
                    <option value="cyan">cyan</option>
                    <option value="cornflowerblue">cornflowerblue</option>
                    <option value="darkblue">darkblue</option>
                    <option value="darkcyan">darkcyan</option>
                    <option value="darkgoldenrod">darkgoldenrod</option>
                    <option value="darkgreen">darkgreen</option>
                    <option value="darkmagenta">darkmagenta</option>
                    <option value="darkgray">darkgray</option>
                    <option value="darkorange">darkorange</option>
                    <option value="darkred">darkred</option>
                    <option value="fuchsia">fuchsia</option>
                    <option value="firebrick">firebrick</option>
                    <option value="gold">gold</option>
                    <option value="indigo">indigo</option>
                    <option value="lightgreen">lightgreen</option>
                    <option value="lightblue">lightblue</option>
                    <option value="lightpink">lightpink</option>
                    <option value="maroon">maroon</option>
                    <option value="mediumblue">mediumblue</option>
                    <option value="mediumorchid">mediumorchid</option>
                    <option value="navy">navy</option>
                    <option value="olive">olive</option>
                    <option value="peru">peru</option>
                    <option value="palegreen">palegreen</option>
                    <option value="royalblue">royalblue</option>
                </select>
       </div>
     )
   }

  //  menurandom=()=>{
  //    const random = !this.state.darker
  //    this.setState({darker:random})
  //  }

   pilihwarna=()=>{
     if (this.state.selectcolorpick === 'allcolor'){
       return  (
         <div>
           <Allcolor/>
         </div>
       )
     }else if(this.state.selectcolorpick === 'red'){
       return (
        <div id='red' style={{backgroundColor:'red', width:'250px', height:'250px'}}>red</div>
       )
     }else if(this.state.selectcolorpick === 'yellow'){
      return (
       <div id='red' style={{backgroundColor:'yellow', width:'250px', height:'250px'}}>yellow</div>
      )
    }else if(this.state.selectcolorpick === 'blue'){
      return (
       <div id='red' style={{backgroundColor:'blue', width:'250px', height:'250px'}}>blue</div>
      )
    }else if(this.state.selectcolorpick === 'green'){
      return (
       <div id='green' style={{backgroundColor:'green', width:'250px', height:'250px'}}>green</div>
      )
    }else if(this.state.selectcolorpick === 'brown'){
      return (
       <div id='red' style={{backgroundColor:'brown', width:'250px', height:'250px'}}>brown</div>
      )
    }else if(this.state.selectcolorpick === 'grey'){
      return (
       <div id='grey' style={{backgroundColor:'grey', width:'250px', height:'250px'}}>grey</div>
      )
    }else if(this.state.selectcolorpick === 'purple'){
      return (
       <div id='purple' style={{backgroundColor:'purple', width:'250px', height:'250px'}}>purple</div>
      )
    }else if(this.state.selectcolorpick === 'black'){
      return (
       <div id='black' style={{backgroundColor:'black', width:'250px', height:'250px'}}>black</div>
      )
    }else if(this.state.selectcolorpick === 'aquablue'){
      return (
       <div id='aquablue' style={{backgroundColor:'aquablue', width:'250px', height:'250px'}}>aquablue</div>
      )
    }else if(this.state.selectcolorpick === 'burlywood'){
      return (
       <div id='burlywood' style={{backgroundColor:'burlywood', width:'250px', height:'250px'}}>burlywood</div>
      )
    }else if(this.state.selectcolorpick === 'red'){
      return (
       <div id='red' style={{backgroundColor:'red', width:'250px', height:'250px'}}>red</div>
      )
    }else if(this.state.selectcolorpick === 'coral'){
      return (
       <div id='coral' style={{backgroundColor:'coral', width:'250px', height:'250px'}}>coral</div>
      )
    }else if(this.state.selectcolorpick === 'chocolate'){
      return (
       <div id='chocolate' style={{backgroundColor:'chocolate', width:'250px', height:'250px'}}>chocolate</div>
      )
    }else if(this.state.selectcolorpick === 'chartreuse'){
      return (
       <div id='chartreuse' style={{backgroundColor:'chartreuse', width:'250px', height:'250px'}}>chartreuse</div>
      )
    }else if(this.state.selectcolorpick === 'crimson'){
      return (
       <div id='crimson' style={{backgroundColor:'crimson', width:'250px', height:'250px'}}>crimson</div>
      )
    }else if(this.state.selectcolorpick === 'cyan'){
      return (
       <div id='cyan' style={{backgroundColor:'cyan', width:'250px', height:'250px'}}>cyan</div>
      )
    }else if(this.state.selectcolorpick === 'cornflowerblue'){
      return (
       <div id='cornflowerblue' style={{backgroundColor:'cornflowerblue', width:'250px', height:'250px'}}>cornflowerblue</div>
      )
    }else if(this.state.selectcolorpick === 'darkblue'){
      return (
       <div id='darkblue' style={{backgroundColor:'darkblue', width:'250px', height:'250px'}}>darkblue</div>
      )
    }else if(this.state.selectcolorpick === 'darkcyan'){
      return (
       <div id='darkcyan' style={{backgroundColor:'darkcyan', width:'250px', height:'250px'}}>darkcyan</div>
      )
    }else if(this.state.selectcolorpick === 'darkgoldenrod'){
      return (
       <div id='darkgoldenrod' style={{backgroundColor:'darkgoldenrod', width:'250px', height:'250px'}}>darkgoldenrod</div>
      )
    }else if(this.state.selectcolorpick === 'darkgreen'){
      return (
       <div id='darkgreen' style={{backgroundColor:'darkgreen', width:'250px', height:'250px'}}>darkgreen</div>
      )
    }else if(this.state.selectcolorpick === 'darkmagenta'){
      return (
       <div id='darkmagenta' style={{backgroundColor:'darkmagenta', width:'250px', height:'250px'}}>darkmagenta</div>
      )
    }else if(this.state.selectcolorpick === 'darkgray'){
      return (
       <div id='darkgray' style={{backgroundColor:'darkgray', width:'250px', height:'250px'}}>darkgray</div>
      )
    }else if(this.state.selectcolorpick === 'darkorange'){
      return (
       <div id='darkorange' style={{backgroundColor:'darkorange', width:'250px', height:'250px'}}>darkorange</div>
      )
    }else if(this.state.selectcolorpick === 'darkred'){
      return (
       <div id='darkred' style={{backgroundColor:'darkred', width:'250px', height:'250px'}}>darkred</div>
      )
    }else if(this.state.selectcolorpick === 'fuchsia'){
      return (
       <div id='fuchsia' style={{backgroundColor:'fuchsia', width:'250px', height:'250px'}}>fuchsia</div>
      )
    }else if(this.state.selectcolorpick === 'firebrick'){
      return (
       <div id='firebrick' style={{backgroundColor:'firebrick', width:'250px', height:'250px'}}>firebrick</div>
      )
    }else if(this.state.selectcolorpick === 'gold'){
      return (
       <div id='gold' style={{backgroundColor:'gold', width:'250px', height:'250px'}}>gold</div>
      )
    }else if(this.state.selectcolorpick === 'indigo'){
      return (
       <div id='indigo' style={{backgroundColor:'indigo', width:'250px', height:'250px'}}>indigo</div>
      )
    }else if(this.state.selectcolorpick === 'lightgreen'){
      return (
       <div id='lightgreen' style={{backgroundColor:'lightgreen', width:'250px', height:'250px'}}>lightgreen</div>
      )
    }else if(this.state.selectcolorpick === 'lightblue'){
      return (
       <div id='lightblue' style={{backgroundColor:'lightblue', width:'250px', height:'250px'}}>lightblue</div>
      )
    }else if(this.state.selectcolorpick === 'lightpink'){
      return (
       <div id='lightpink' style={{backgroundColor:'lightpink', width:'250px', height:'250px'}}>lightpink</div>
      )
    }else if(this.state.selectcolorpick === 'maroon'){
      return (
       <div id='maroon' style={{backgroundColor:'maroon', width:'250px', height:'250px'}}>maroon</div>
      )
    }else if(this.state.selectcolorpick === 'mediumblue'){
      return (
       <div id='mediumblue' style={{backgroundColor:'mediumblue', width:'250px', height:'250px'}}>mediumblue</div>
      )
    }else if(this.state.selectcolorpick === 'mediumorchid'){
      return (
       <div id='mediumorchid' style={{backgroundColor:'mediumorchid', width:'250px', height:'250px'}}>mediumorchid</div>
      )
    }else if(this.state.selectcolorpick === 'navy'){
      return (
       <div id='navy' style={{backgroundColor:'navy', width:'250px', height:'250px'}}>navy</div>
      )
    }else if(this.state.selectcolorpick === 'olive'){
      return (
       <div id='olive' style={{backgroundColor:'olive', width:'250px', height:'250px'}}>olive</div>
      )
    }else if(this.state.selectcolorpick === 'peru'){
      return (
       <div id='peru' style={{backgroundColor:'peru', width:'250px', height:'250px'}}>peru</div>
      )
    }else if(this.state.selectcolorpick === 'palegreen'){
      return (
       <div id='palegreen' style={{backgroundColor:'palegreen', width:'250px', height:'250px'}}>palegreen</div>
      )
    }else if(this.state.selectcolorpick === 'royalblue'){
      return (
       <div id='royalblue' style={{backgroundColor:'royalblue', width:'250px', height:'250px'}}>royalblue</div>
      )
    }
   }

  render() { 
    return ( 
      <div>
       <div>
         {this.renderselectcolor()}
       </div>
       <div>
         {this.pilihwarna()}
       </div>
      </div>
     );
  }
}
 
export default App;
