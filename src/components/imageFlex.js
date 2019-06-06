import React from "react";
import "./imageFlex.scss";

const RenderImage = ({ imgDetail, handlePopUp }) => (
  <div
    className="img"
    onClick={() => {
      handlePopUp(imgDetail);
    }}
  >
    <img src={imgDetail.urls.small} alt={imgDetail.alt_description} />
  </div>
);

const ImageFlex = ({ imageList, handlePopUp }) => (
  <div className="images-list">
    {imageList.map(eachImgDetail => {
      return (
        <RenderImage
          imgDetail={eachImgDetail}
          key={imageList.id}
          handlePopUp={handlePopUp}
        />
      );
    })}
  </div>
);

export default ImageFlex;
