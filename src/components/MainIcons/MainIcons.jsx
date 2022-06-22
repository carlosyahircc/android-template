import gallery from "../../icons/gallery.png";
import diccionario from "../../icons/diccionario.png";
import folder from "../../icons/folder.png";
import music from "../../icons/music-note.png";
import playStore from "../../icons/google-play.png";
import { useNavigate } from "react-router";
export const MainIcons = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="menuIcon">
        <img src={folder} alt="Folder" />
        <span>フォルダー</span>
      </div>

      <div className="menuIcon">
        <img src={music} alt="Folder" />
        <span>ミュージック</span>
      </div>

      <div className="menuIcon">
        <img src={playStore} alt="Folder" />
        <span>Playストア</span>
      </div>

      <div className="menuIcon">
        <img
          src={gallery}
          alt="Gallery"
          onClick={() => {
            navigate("/home/gallery", { replace: true });
          }}
        />
        <span>ギャラリー</span>
      </div>

      <div className="menuIcon">
        <img src={diccionario} alt="Diccionario" />
        <span>辞書</span>
      </div>
    </>
  );
};