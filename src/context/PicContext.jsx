import { createContext, useContext, useState } from "react";
import photos from "../assets/fotos.json";

const PicContext = createContext();

export const usePicContext = () => {
  return useContext(PicContext);
};

export const PicProvider = ({ children }) => {
  const [dataPhotos, setDataPhotos] = useState(photos.photos);

  const markAsLiked = (id) => {
    setDataPhotos((prevData) =>
      prevData.map((photo) =>
        photo.id === id ? { ...photo, liked: !photo.liked } : photo
      )
    );
  };

  const context = { dataPhotos, markAsLiked };

  return <PicContext.Provider value={context}>{children}</PicContext.Provider>;
};

export default PicContext;
