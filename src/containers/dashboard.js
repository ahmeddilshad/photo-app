import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import getImages from "../actions/fetchImageAction";
import ImageFlex from "../components/imageFlex";
import ImagePopUp from "../components/imagePopUp";
import SearchBar from "../components/searchbar";
import Spinner from "../components/spinner";
import "./dashboard.scss";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      imageList: [],
      searchString: "",
      showPopUp: false,
      popUpImageDetials: ""
    };
    this.loadMore = this.loadMore.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
  }

  componentDidMount() {
    const { getImagesAction } = this.props;
    const { page, searchString } = this.state;
    getImagesAction({ page, searchString });
  }

  static getDerivedStateFromProps(props, state) {
    let imageList = [];
    const { responseData } = props;
    if (responseData) {
      imageList = responseData;
    } else {
      imageList = state.imageList;
    }
    return {
      imageList
    };
  }

  renderImages() {
    const { imageList } = this.state;
    if (Array.isArray(imageList) && imageList.length > 0) {
      return <ImageFlex imageList={imageList} handlePopUp={this.handlePopUp} />;
    }
    return null;
  }

  // Not implementing debounce function its a normal search
  async onSearch(event) {
    const { page, searchString } = this.state;
    const { getImagesAction } = this.props;
    this.setState({
      searchString: event.target.value,
      imageList: []
    });
    getImagesAction({ page, searchString: event.target.value });
  }

  loadMore() {
    const { getImagesAction } = this.props;
    let { page, searchString, imageList } = this.state;
    page = page + 1;
    getImagesAction({ page, searchString, prevData: imageList });
    this.setState({
      page
    });
  }

  handlePopUp(imageDetials = "") {
    this.setState({
      showPopUp: !this.state.showPopUp,
      popUpImageDetials: imageDetials
    });
  }

  renderLoadMoreButton() {
    const { imageList } = this.state;
    if (Array.isArray(imageList) && imageList.length > 0) {
      return (
        <div className="load-more">
          <Button type="button" onClick={this.loadMore}>
            Load More
          </Button>
        </div>
      );
    }
  }

  render() {
    const { loading } = this.props;
    const { showPopUp, popUpImageDetials } = this.state;
    return (
      <div className="main">
        <div className="title">Razorthink</div>
        <div className="content-section">
          <SearchBar handleSearch={this.onSearch} />
          {this.renderImages()}
          {loading ? <Spinner /> : this.renderLoadMoreButton()}
        </div>
        <ImagePopUp
          showPopUp={showPopUp}
          handlePopUp={this.handlePopUp}
          imageDetails={popUpImageDetials}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ imageDataReducer }) => {
  const { loading, success, fail, responseData } = imageDataReducer;
  return { loading, success, fail, responseData };
};

export default connect(
  mapStateToProps,
  { getImagesAction: getImages }
)(DashBoard);
