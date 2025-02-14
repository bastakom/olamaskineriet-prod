import useStore from "@/utils/store";
import Image from "next/image";

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
  return (
    <div
      className={`transition-opacity delay-500 animate-fade-right opacity-0 ${
        soundOpen &&
        "sound-container overflow-auto top-0 fixed mx-auto h-screen z-10 w-[100%] p-4 opacity-80 pb-20 lg:pb-0"
      }`}
    >
      {soundOpen && (
        <div className="grid lg:grid-cols-3 items-center lg:justify-center mx-auto w-full gap-4 lg:mt-24">
          {content.sound.map((el: any, index: number) => {
            return (
              <div className="flex flex-col gap-4" key={index}>
                <div className="relative h-[400px]">
                  <Image
                    src={el?.image?.filename}
                    fill
                    className="object-cover"
                    alt={el?.image?.alt}
                  />
                </div>
                <div className="text-white">{el.title}</div>
                <audio controls src={el.sound.filename}></audio>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
