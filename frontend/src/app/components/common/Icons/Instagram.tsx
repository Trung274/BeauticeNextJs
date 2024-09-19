import React from 'react'

const InstagramIcon: React.FC = () => {
  return (
    <button className="hover:scale-125 focus:scale-125">
      <svg
        width="79"
        height="79"
        viewBox="0 0 79 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_24_132)">
          <circle cx="41.5" cy="33.5" r="24.5" fill="white" />
        </g>
        <path
          d="M41.5049 27.8848C38.3994 27.8848 35.8945 30.3896 35.8945 33.4951C35.8945 36.6006 38.3994 39.1055 41.5049 39.1055C44.6104 39.1055 47.1152 36.6006 47.1152 33.4951C47.1152 30.3896 44.6104 27.8848 41.5049 27.8848ZM41.5049 37.1426C39.498 37.1426 37.8574 35.5068 37.8574 33.4951C37.8574 31.4834 39.4932 29.8477 41.5049 29.8477C43.5166 29.8477 45.1523 31.4834 45.1523 33.4951C45.1523 35.5068 43.5117 37.1426 41.5049 37.1426ZM48.6533 27.6553C48.6533 28.3828 48.0674 28.9639 47.3447 28.9639C46.6172 28.9639 46.0361 28.3779 46.0361 27.6553C46.0361 26.9326 46.6221 26.3467 47.3447 26.3467C48.0674 26.3467 48.6533 26.9326 48.6533 27.6553ZM52.3691 28.9834C52.2861 27.2305 51.8857 25.6777 50.6016 24.3984C49.3223 23.1191 47.7695 22.7188 46.0166 22.6309C44.21 22.5283 38.7949 22.5283 36.9883 22.6309C35.2402 22.7139 33.6875 23.1143 32.4033 24.3936C31.1191 25.6729 30.7236 27.2256 30.6357 28.9785C30.5332 30.7852 30.5332 36.2002 30.6357 38.0068C30.7188 39.7598 31.1191 41.3125 32.4033 42.5918C33.6875 43.8711 35.2354 44.2715 36.9883 44.3594C38.7949 44.4619 44.21 44.4619 46.0166 44.3594C47.7695 44.2764 49.3223 43.876 50.6016 42.5918C51.8809 41.3125 52.2812 39.7598 52.3691 38.0068C52.4717 36.2002 52.4717 30.79 52.3691 28.9834ZM50.0352 39.9453C49.6543 40.9023 48.917 41.6396 47.9551 42.0254C46.5146 42.5967 43.0967 42.4648 41.5049 42.4648C39.9131 42.4648 36.4902 42.5918 35.0547 42.0254C34.0977 41.6445 33.3604 40.9072 32.9746 39.9453C32.4033 38.5049 32.5352 35.0869 32.5352 33.4951C32.5352 31.9033 32.4082 28.4805 32.9746 27.0449C33.3555 26.0879 34.0928 25.3506 35.0547 24.9648C36.4951 24.3936 39.9131 24.5254 41.5049 24.5254C43.0967 24.5254 46.5195 24.3984 47.9551 24.9648C48.9121 25.3457 49.6494 26.083 50.0352 27.0449C50.6064 28.4854 50.4746 31.9033 50.4746 33.4951C50.4746 35.0869 50.6064 38.5098 50.0352 39.9453Z"
          fill="#091156"
        />
        <defs>
          <filter
            id="filter0_d_24_132"
            x="0"
            y="0"
            width="79"
            height="79"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_24_132"
            />
            <feOffset dx="-2" dy="6" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.900764 0 0 0 0 0.912127 0 0 0 0 0.991667 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_24_132"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_24_132"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  )
}

export default InstagramIcon