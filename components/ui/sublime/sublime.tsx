import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import useStore from "@/utils/store";

interface SublimeProps {
  blok: {
    _uid: string;
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
}

export const Sublime = ({ blok }: SublimeProps) => {
  const { videoBlock } = useStore();
  const {
    info_content,
    email_contact,
    sublime,
    contact,
    email_sublime,
    fb_link,
    ig_link,
  } = blok;

  return (
    <div
      className={`transition-opacity delay-500 animate-fade-right lg:opacity-0  ${
        videoBlock === blok._uid && "lg:opacity-100"
      }`}
    >
      <div
        className={`lg:absolute lg:bottom-24 lg:left-6 text-white lg:w-[50%] lg:rounded-lg lg:pb-0`}
      >
        <div className="absolute w-full lg:h-full sublime-bg opacity-80 lg:rounded-lg"></div>

        <div className="relative z-10">
          <div className="sublime p-6 ">{render(info_content)}</div>
          <div className="lg:flex border-t-2 p-4 lg:p-0 lg:mx-4">
            <div
              className={`lg:border-r-2 lg:p-4 sublime ${
                !sublime ? "lg:w-[50%]" : "lg:w-[40%]"
              }`}
            >
              {render(email_contact)}
            </div>
            <div
              className={`${
                sublime ? "lg:border-r-2 lg:p-4 sublime" : "hidden"
              }`}
            >
              <div className="text-black lg:text-white pt-4 lg:pt-0">
                {sublime}
              </div>
              <div className="sublime">{render(contact)}</div>
              <div className="sublime pb-4 lg:pb-0">
                {render(email_sublime)}
              </div>
            </div>
            <div
              className={`flex lg:justify-center items-center gap-4 mx-auto ${
                sublime ? "mt-0" : "mt-4 lg:mt-0"
              }`}
            >
              <Link href={fb_link.cached_url}>
                <FaFacebook
                  fontSize={30}
                  className="text-black lg:text-white"
                />
              </Link>
              <Link href={ig_link.cached_url}>
                <FaInstagram
                  fontSize={30}
                  className="text-black lg:text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
