const React = require('react')

class ReadImg extends React.Component {
  static defaultProps : {
    show  : false,
    result: null,
    style : {}
  }
  onchange(){
    const cb = this.props.result || function (a){
      console.log(a)
    }
    const file = this.refs.id.files[0]
    if(!/image\/\w+/.test(file.type))return cb(false);
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload=function(e){
      cb(this.result)
    }
  }
  render() {
    const showcss = show ? {opacity: 0} : {}
    const {show, style} = this.props

    return (
      <div style={ style }>
        <input style={ showcss } ref="id" type="file" onChange={this.onchange.bind(this)} />
      </div>
    );
  }
}


module.exports = ReadImg
