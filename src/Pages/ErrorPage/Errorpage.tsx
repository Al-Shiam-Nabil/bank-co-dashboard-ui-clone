import { useNavigate } from "react-router";
import ErrorImage from "../../assets/errorImage.svg";

export default function Errorpage() {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center min-h-screen">
      <div>
        <img src={ErrorImage} alt="error404 image" className="w-167 h-112" />

        <div className="grid place-items-center mt-20">
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-primary font-semibold py-3 px-10 rounded-lg cursor-pointer hover:bg-primary/90"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
