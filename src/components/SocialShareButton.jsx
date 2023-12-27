import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
const SocialShareButton = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a
        href={`https://www.twitter.com/intent/tweet?url=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
      <a
        href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a
        href={`https://api.whatsapp.com/send/?text=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsappSquare className="text-[#25d366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButton;
