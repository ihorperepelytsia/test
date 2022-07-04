import React from "react";
import { ListItemPhoto } from "components/ListItemPhoto/ListItemPhoto";
import { useFetchPhotosQuery } from "redux/apiPhotos";
import { Oval } from "react-loader-spinner";
import { List, Spinner } from "./ListPhoto.styled";

export const ListPhotos = () => {
  const { data, isFetching } = useFetchPhotosQuery();
  return (
    <>
      {isFetching && (
        <Spinner>
          <Oval height={80} width={80} />
        </Spinner>
      )}
      <List>
        {data &&
          data.map(
            ({
              id,
              alt_description,
              description,
              urls: { full, thumb },
              user: { name },
            }) => (
              <ListItemPhoto
                key={id}
                alt={alt_description}
                description={description}
                fullPhoto={full}
                smallPhoto={thumb}
                userName={name}
              />
            )
          )}
      </List>
    </>
  );
};
