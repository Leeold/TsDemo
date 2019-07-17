import * as React from "react";
import { connect } from "react-redux";
import "./index.less";

interface Props {

}
interface State{
    data:string,
    list:number[]
}
class Mime extends React.Component<Props,State> {
    state={
        data:"123",
        list:[1,2,3,4,5]
    }
    showIndex = (item:number):any=>{
        console.log(item)
       return item;
    }
  render() {
      return (<ul id="ul">
          {this.state.list.map((item:number,index:number):any => {
              return <li onClick={this.showIndex.bind(this,item)} key={index}>{item}</li>
          })}

      </ul>);
  }
}
export default connect()(Mime);
