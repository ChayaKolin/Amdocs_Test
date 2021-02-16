import { connect } from 'react-redux'
import Home from './../components/Home'
import { getData } from './../actions'



const mapStateToProps = (state, ownProps) => {
  return {
    data: state.informationData.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () =>{
      dispatch(getData())}
  }
}

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomePage
