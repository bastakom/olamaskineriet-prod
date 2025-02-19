/* "use client";

import React, { useEffect } from "react";
import useStore from "@/utils/store";
import Link from "next/link";

const SongkickWidget = () => {
  const { liveOpen } = useStore();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget-app.songkick.com/injector/8631864";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`fixed mx-auto h-screen top-16 lg:top-24 w-[100%] p-4 z-20 transition-opacity delay-500 animate-fade-right opacity-0 ${
        liveOpen && "opacity-100"
      }`}
    >
      <div>
        <Link
          href="https://www.songkick.com/artists/10306920"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="off"
          data-background-color="rgb(0,0,0,1)"
          data-font-color="rgb(255,255,255,1)"
          data-button-bg-color="rgb(255,255,255,1)"
          data-button-text-color="rgb(0,0,0,1)"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="on"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="off"
        ></Link>
      </div>
    </div>
  );
};

export default SongkickWidget; */

"use client";

import React, { useEffect } from "react";
import useStore from "@/utils/store";
import Link from "next/link";

const SongkickWidget = () => {
  const { liveOpen } = useStore();

  useEffect(() => {
    if (liveOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [liveOpen]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget-app.songkick.com/injector/8631864";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-screen top-0 lg:top-0 p-4 z-10 transition-opacity delay-500 animate-fade-right ${
        liveOpen
          ? " opacity-100  flex justify-center items-center lg:overflow-hidden fixed"
          : "opacity-0"
      }`}
    >
      <div className="absolute w-full h-full iframe-container opacity-80"></div>

      <div className="w-[100%] z-20">
        <Link
          href="https://www.songkick.com/artists/10306920"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="off"
          data-background-color="rgb(0,0,0,1)"
          data-font-color="rgb(255,255,255,1)"
          data-button-bg-color="rgb(255,255,255,1)"
          data-button-text-color="rgb(0,0,0,1)"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="on"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="off"
        ></Link>
      </div>
    </div>
  );
};

export default SongkickWidget;
