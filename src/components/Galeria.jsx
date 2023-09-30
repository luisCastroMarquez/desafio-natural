import { usePicContext } from "../context/PicContext";
import "../assets/css/galeria.css";
import Heart from "./Heart";

export default function Galeria() {
  const { dataPhotos, markAsLiked } = usePicContext();

  const handleLikedClick = (id) => {
    markAsLiked(id);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {dataPhotos.map((image) => (
        <div
          key={image.id}
          className="foto"
          style={{ backgroundImage: `url(${image.src.original})` }}
        >
          <Heart
            filled={image.liked}
            onClick={() => handleLikedClick(image.id)}
          />
          <span>{image.alt}</span>
        </div>
      ))}
    </div>
  );
}
