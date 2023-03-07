import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import dishesinfo from "../../pages/mainPage/components/Dishes/menu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  // color: {
  //   filled: PropTypes.string,
  //   unfilled: PropTypes.string,
  // },
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#F9AD3D",
    unfilled: "#4D4D4D",
  },
};

function Rate({ count, rating, color, onRating,}) {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
      if (hoverRating >= index) {
          return color.filled;
      } else if (!hoverRating && rating >= index) {
          return color.filled;
      }

      return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <svg key={idx}
        onClick={() => onRating(idx)}
        onMouseEnter={() => setHoverRating(idx)}
        onMouseLeave={() => setHoverRating(0)} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_4_199"  maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                <path fillRule='evenodd' clipRule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_4_199)">
                <rect className="cursor-pointer" style={{ fill: getColor(idx) }} x="-3" y="-3"  id={idx + (dishesinfo.length * idx)} width="26" height="26" fill="#4D4D4D"/>
            </g>
        </svg>
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

export default Rate;