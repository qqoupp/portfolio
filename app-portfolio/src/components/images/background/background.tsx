import { ReactComponent as Background } from "../background/blurry-gradient-haikei.svg";


const BackgroundComponent = () => {
  return (
    <div className="relative w-full h-full">
      <Background className="w-full h-full object-cover" />
    </div>
  );
};

export default BackgroundComponent;