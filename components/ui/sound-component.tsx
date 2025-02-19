import useStore from "@/utils/store";
import Image from "next/image";
import { useEffect } from "react";

interface SoundProps {
  settings: {
    content: {
      sound: React.ReactNode[];
    };
  };
}

export const SoundComponent = ({ settings }: SoundProps) => {
  const { soundOpen } = useStore();
  const { content } = settings;

  useEffect(() => {
    if (soundOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [soundOpen]);

  return (
    <div
      className={`transition-opacity delay-500 animate-fade-right opacity-0 ${
        soundOpen &&
        "sound-container overflow-auto lg:overflow-hidden top-0 fixed mx-auto h-screen z-10 w-[100%] p-4 opacity-95 lg:opacity-80 pb-20 lg:pb-0"
      }`}
    >
      {soundOpen && (
        <div className="grid lg:grid-cols-3 items-center lg:justify-center  w-full gap-4 lg:h-full pt-20 pb-10 lg:pt-0 lg:pb-0">
          {content.sound.map((el: any, index: number) => {
            return (
              <div
                className="flex flex-col gap-4 justify-center items-center"
                key={index}
              >
                <div className="relative h-[400px] w-full">
                  <Image
                    src={el?.image?.filename}
                    fill
                    className="object-cover"
                    alt={el?.image?.alt}
                  />
                </div>
                <div className="text-white text-center">{el.title}</div>
                <audio controls src={el.sound.filename}></audio>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
