const React = require('react')

class ReadImg extends React.Component {
  onchange(){
    const cb = this.props.result
    const isBlod = this.props.isBlod
    const file = this.refs.id.files[0]
    if(!/image\/\w+/.test(file.type))return cb(false);
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload=function(e){
      let result = this.result
      if(isBlod) result = toUrl(result)
      return cb(this.result)
    }
  }

  toUrl(result){
    return result
  }
  render() {
    const {show, style} = this.props
    const showcss = show ? {} : {opacity: 0}

    return (
      <div style={ style }>
        <input style={ showcss } ref="id" type="file" onChange={this.onchange.bind(this)} />
      </div>
    );
  }
}

ReadImg.defaultProps = {
  show  : true,
  result: a => console.log(a),
  style : {},
  isBlod: false
}


module.exports = ReadImg
