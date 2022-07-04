import React from "react";
import { useSelector } from "react-redux";
import { getFullPhoto } from "redux/selectorsPhoto";
import {
  ImageFull,
  ContainerPhoto,
  Button,
} from "components/ListItemPhoto/ListItemPhoto.styled";
import { useNavigate } from "react-router-dom";

export const PhotoLargPage = () => {
  const navigate = useNavigate();
  const fullPhoto = useSelector(getFullPhoto);
  const handleToBack = () => {
    navigate("/", { replace: true });
  };
  return (
    <ContainerPhoto>
      <Button onClick={handleToBack}>Back</Button>
      <ImageFull src={fullPhoto} />
    </ContainerPhoto>
  );
};
