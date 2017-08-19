const React = require('react')

class ReadImg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      easyShow: false,
      easyImg: ''
    }
  }
  onchange(){
    const cb = this.props.result
    const { isBlod, easy, id} = this.props
    const that = this
    const file = document.getElementById( id ? id : '_ReactReadImg').files[0]
    if(!/image\/\w+/.test(file.type))return cb(false);
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload=function(e){
      let result = this.result
      if(easy) that.setState({easyImg: result, easyShow: true})
      if(isBlod) result = toUrl(result)
      return cb(result)
    }
  }
  // 测试中未完成
  toUrl(result){
    return result
  }
  render() {
    const {show, style, inputStyle, easy, id} = this.props
    const { easyShow, easyImg } = this.state
    const showcss = show ? {} : {opacity: 0}
    return (
      <div style={ style }>
        { easyShow ? '' : <input style={{ ...showcss, ...inputStyle}} id={ id ? id : '_ReactReadImg' } type="file" onChange={this.onchange.bind(this)}  accept="image/jpg,image/jpeg,image/png,image/gif" /> }
        { (easy && easyShow) ?  <img style={{width: '100%', height: '100%'}} src={easyImg} onClick={()=>this.setState({easyShow: false})} /> : '' }
      </div>
    );
  }
}

ReadImg.defaultProps = {
  show  : true,
  result: a => console.log(a),
  style : {},
  isBlod: false,
  inputStyle: {width: '100%', height: '100%'},
  easy: false
}


module.exports = ReadImg
