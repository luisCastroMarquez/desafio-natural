import { usePicContext } from "../context/PicContext";
import "../assets/css/galeria.css";
import Heart from "../components/Heart";

export default function Favoritos() {
  const { dataPhotos, markAsLiked } = usePicContext();

  const favoritos = dataPhotos.filter((image) => image.liked);

  const handleRemoveFromFavorites = (id) => {
    markAsLiked(id);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((image) => (
          <div
            key={image.id}
            className="foto"
            style={{ backgroundImage: `url(${image.src.original})` }}
          >
            <Heart
              filled={true}
              onClick={() => handleRemoveFromFavorites(image.id)}
            />
            <span>{Image.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
