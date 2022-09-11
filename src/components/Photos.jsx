import React, { useEffect } from "react";

const Photos = () => {
  const [photos, setPhotos] = React.useState([]);
  useEffect(() => {
    fetch("https://server-app-78686787.herokuapp.com/api/photos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        const firstSet = data.splice(1, 100);
        // setPhotos((state) => {
        //   return [...state, ...firstSet];
        // });
        setPhotos([...firstSet]);
      });
  }, []);

  return (
    <>
      <div>Photos List</div>
      {photos.map((photo) => {
        return (
          <div class="card" style={{ width: "18rem" }}>
            <img src={photo.thumbnailUrl} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{photo.title}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Photos;
