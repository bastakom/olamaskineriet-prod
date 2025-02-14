import useStore from "@/utils/store";
import { Sublime } from "./ui/sublime/sublime";
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";

interface VideoBlockProps {
  blok: {
    _uid: string;
    mute_button: string;
    video: {
      filename: string;
    };
    info_content: React.ReactNode;
    email_contact: React.ReactNode;
    email_sublime: React.ReactNode;
    contact: React.ReactNode;
    sublime: string;
    fb_link: {
      cached_url: string;
    };
    ig_link: {
      cached_url: string;
    };
  };

  settings: {
    content: {
      info_link: string;
    };
  };
}

export const VideoBlock = ({ blok, settings }: VideoBlockProps) => {
  const { content } = settings;

  const {
    volumeOpen,
    setVolumeOpen,
    setVideoBlock,
    setSoundOn,
    soundOn,
    videoBlock,
    soundOpen,
  } = useStore();

  const handleOnClickVolume = () => {
    setVolumeOpen(!volumeOpen);
  };
  const handleOnClickInfo = (id: any) => {
    setVideoBlock(videoBlock === id ? null : id);
    if (videoBlock === id) {
      setVideoBlock("");
    }
  };

  const handleSoundOn = (id: string) => {
    setSoundOn(id);
  };

  return (
    <div className="relative w-[100%] h-full mt-16 lg:mt-0">
      <video
        src={blok?.video?.filename}
        autoPlay
        playsInline
        muted={!(volumeOpen && soundOn == blok._uid)}
        loop
        className="w-full z-10"
      ></video>

      <div className="absolute lg:top-36 left-0 z-10"></div>
      <div className="flex justify-between items-center z-10 w-[100%] absolute -bottom-12 lg:bottom-0">
        <button
          className="button-info z-10 lg:flex items-center"
          onClick={() => {
            handleOnClickInfo(blok._uid);
          }}
        >
          {videoBlock === blok._uid ? "Stäng" : content.info_link}
        </button>

        {blok.mute_button && (
          <div
            className={`${
              soundOpen ? "hidden " : "button-volume lg:flex justify-between"
            }`}
            onClick={() => handleOnClickVolume()}
          >
            {volumeOpen && soundOn == blok._uid ? (
              <MdVolumeUp
                fontSize={30}
                onClick={() => handleSoundOn(blok._uid)}
              />
            ) : (
              <MdVolumeOff
                fontSize={30}
                onClick={() => handleSoundOn(blok._uid)}
              />
            )}
          </div>
        )}
      </div>

      <Sublime blok={blok} />
    </div>
  );
};
