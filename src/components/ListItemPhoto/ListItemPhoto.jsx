import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onChangeFullPhotoStore } from "redux/photoSlice";
import { Item } from "./ListItemPhoto.styled";

export const ListItemPhoto = ({
  alt,
  description,
  fullPhoto,
  smallPhoto,
  userName,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickFullPhoto = () => {
    navigate("/photo-larg", { replace: true });
    dispatch(onChangeFullPhotoStore(fullPhoto));
  };

  return (
    <>
      <Item onClick={handleClickFullPhoto}>
        <img src={smallPhoto} alt={alt ? alt : ""} />
        <div>
          <p>
            <span>Photo Name:</span>{" "}
            {description ? description || alt : "No name :("}
          </p>
          <p>
            <span>Author:</span> {userName}
          </p>
        </div>
      </Item>
    </>
  );
};

ListItemPhoto.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  fullPhoto: PropTypes.string.isRequired,
  smallPhoto: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
