import * as ROUTES from "../../constants/routes";
import { BrowserRouter, Link } from "react-router-dom";
import Navigation from "../navigation";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <svg
            className="header__logo"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="3300"
            height="1349.9999999999998"
            viewBox="0 0 3300 1349.9999999999998"
          >
            <g transform="scale(14.999999999999998) translate(10, 10)">
              <defs id="SvgjsDefs1016" />
              <g
                id="SvgjsG1017"
                featureKey="rootContainer"
                transform="matrix(1,0,0,1,0,0)"
                fill="#000"
              >
                <rect y="0" height="1" width="1" opacity="0" />
                <rect y="65" width="200" height="5" />
              </g>
              <g
                id="SvgjsG1018"
                featureKey="nameFeature-0"
                transform="matrix(1.1319389575801835,0,0,1.1319389575801835,-4.573033345443897,7.088109139807743)"
                fill="#000"
              >
                <path d="M25.4 40 l-3.72 0 l-8.64 -11.8 l-5.92 0 l0 11.8 l-3.08 0 l0 -29.16 l10.12 0 c3.44 0 6.2 0.96 7.8 2.56 s2.44 3.6 2.44 5.96 c0 4.92 -3.68 7.76 -8 8.32 z M7.12 13.719999999999999 l0 11.68 l6.76 0 c2.56 0 4.56 -0.72 5.72 -1.88 c1.12 -1.12 1.68 -2.52 1.68 -4.08 c0 -2.88 -1.76 -5.72 -7.32 -5.72 l-6.84 0 z M37.025999999999996 40.36 c-1.84 0 -3.6 -0.48 -5.16 -1.36 c-1.56 -0.92 -2.8 -2.16 -3.68 -3.72 c-0.92 -1.56 -1.36 -3.28 -1.36 -5.16 c0 -2.92 0.96 -5.4 2.96 -7.36 c1.96 -2 4.4 -3 7.32 -3 c5.64 -0.12 10.36 4.64 10.28 10.24 c0.08 5.76 -4.64 10.48 -10.36 10.36 z M37.106 37.76 c2.08 0 3.84 -0.76 5.24 -2.24 c1.36 -1.48 2.04 -3.28 2.04 -5.4 s-0.68 -3.96 -2.08 -5.52 c-1.4 -1.52 -3.12 -2.28 -5.28 -2.28 c-2.08 0 -3.84 0.76 -5.2 2.24 s-2.04 3.28 -2.04 5.44 c-0.08 4.12 3.08 7.84 7.32 7.76 z M52.172 29.96 c0 2.8 1.16 5.24 3.36 6.68 c1.12 0.76 2.4 1.12 3.84 1.12 c1.68 0 3.16 -0.56 4.08 -1.24 c0.44 -0.32 0.84 -0.72 1.24 -1.2 c0.72 -0.96 1.04 -1.6 1.32 -2.32 l2.68 0.88 c-0.44 1.56 -1.52 3.08 -3.04 4.32 c-1.52 1.28 -3.84 2.16 -6.32 2.16 c-5.68 0.08 -10.2 -4.36 -10.12 -10.24 c0 -1.96 0.48 -3.72 1.4 -5.32 s2.16 -2.84 3.72 -3.72 s3.24 -1.32 5.12 -1.32 c2.24 0 4.24 0.64 5.92 1.84 c1.72 1.28 2.8 2.76 3.2 4.52 l-2.64 0.88 c-0.44 -1.6 -2.48 -4.64 -6.56 -4.64 c-2.08 0 -3.8 0.72 -5.16 2.2 s-2.04 3.28 -2.04 5.4 z M74.75800000000001 30.04 l-0.12 0 l0 9.96 l-2.92 0 l0 -30.36 l2.92 0 l0 18.56 l9.44 -8.08 l4.12 0 l-10.48 8.92 l10.96 10.96 l-4.04 0 z M103.304 34.36 c0 1.76 -0.68 3.2 -2.04 4.28 c-1.36 1.12 -3.04 1.68 -5 1.68 c-3.2 0 -5.28 -1.32 -6.36 -2.88 c-0.8 -1.08 -1.08 -2.04 -1.2 -3.04 l2.64 -0.68 c0.32 1.84 1.72 4.08 4.88 4.08 c1.12 0 2.08 -0.32 2.92 -0.92 c0.8 -0.56 1.2 -1.36 1.2 -2.36 c0 -0.8 -0.32 -1.44 -0.96 -1.92 c-0.64 -0.52 -1.4 -0.84 -2.28 -1.04 l-3.04 -0.68 c-3.28 -0.72 -4.96 -2.48 -4.96 -5.2 c0 -2.04 1.04 -3.72 2.48 -4.6 c1.4 -0.88 2.92 -1.32 4.28 -1.32 c3 0.04 4.92 1.2 5.96 2.64 c0.72 1 1.04 1.84 1.2 2.68 l-2.64 0.76 c-0.2 -0.8 -0.52 -1.44 -1.16 -2.24 c-0.68 -0.8 -1.88 -1.28 -3.36 -1.28 c-1.08 0 -1.96 0.28 -2.72 0.92 c-0.76 0.6 -1.12 1.36 -1.12 2.24 c0 1.56 1.12 2.28 2.88 2.72 l3.2 0.72 c2.6 0.6 5.2 2.24 5.2 5.44 z M113.61 40.16 c-4.32 0 -5.64 -2.4 -5.64 -5.32 l0 -12.16 l-3.68 0 l0 -2.56 l3.68 0 l0 -5.72 l2.88 0 l0 5.72 l5.04 0 l0 2.56 l-5.04 0 l0 12.12 c0 1.84 1.08 2.8 3.24 2.8 c0.68 0 1.28 -0.08 1.8 -0.16 l0 2.4 c-0.64 0.2 -1.4 0.32 -2.28 0.32 z M127.756 40.36 c-1.84 0 -3.6 -0.48 -5.16 -1.36 c-1.56 -0.92 -2.8 -2.16 -3.68 -3.72 c-0.92 -1.56 -1.36 -3.28 -1.36 -5.16 c0 -2.92 0.96 -5.4 2.96 -7.36 c1.96 -2 4.4 -3 7.32 -3 c5.64 -0.12 10.36 4.64 10.28 10.24 c0.08 5.76 -4.64 10.48 -10.36 10.36 z M127.83600000000001 37.76 c2.08 0 3.84 -0.76 5.24 -2.24 c1.36 -1.48 2.04 -3.28 2.04 -5.4 s-0.68 -3.96 -2.08 -5.52 c-1.4 -1.52 -3.12 -2.28 -5.28 -2.28 c-2.08 0 -3.84 0.76 -5.2 2.24 s-2.04 3.28 -2.04 5.44 c-0.08 4.12 3.08 7.84 7.32 7.76 z M158.622 40 l-2.92 0 l0 -11.56 c0 -1.84 -0.44 -3.28 -1.4 -4.4 c-0.92 -1.08 -2.28 -1.64 -4.08 -1.64 c-1.72 0 -3.16 0.6 -4.28 1.8 c-1.08 1.2 -1.64 2.68 -1.64 4.48 l0 11.32 l-2.92 0 l0 -19.88 l2.84 0 l0 3.64 c1.6 -2.68 3.88 -4 6.88 -4 c2.36 0 4.2 0.72 5.56 2.16 c1.28 1.48 1.96 3.4 1.96 5.8 l0 12.28 z M180.68800000000002 30.96 l-16.08 0 c0.12 1.96 0.84 3.56 2.2 4.84 c1.36 1.32 3 1.96 4.92 1.96 c3 0 5.24 -1.48 6.16 -4.24 l2.56 0.8 c-0.56 1.88 -1.64 3.36 -3.24 4.44 c-1.6 1.04 -3.4 1.6 -5.44 1.6 c-1.88 0 -3.6 -0.48 -5.16 -1.4 s-2.76 -2.16 -3.6 -3.76 c-0.88 -1.56 -1.32 -3.28 -1.32 -5.16 c0 -1.8 0.4 -3.48 1.24 -5.04 c0.8 -1.6 1.96 -2.84 3.48 -3.8 c1.48 -0.96 3.16 -1.44 4.96 -1.44 c1.96 0 3.68 0.44 5.12 1.36 c1.44 0.88 2.52 2.12 3.2 3.64 c0.72 1.52 1.04 3.24 1.04 5.24 c0 0.2 0 0.52 -0.04 0.96 z M164.64800000000002 28.48 l13.16 0 c-0.2 -1.84 -0.88 -3.32 -2 -4.48 c-1.12 -1.12 -2.6 -1.68 -4.44 -1.68 c-1.72 0 -3.16 0.6 -4.44 1.8 c-1.28 1.24 -2.04 2.68 -2.28 4.36 z" />
              </g>
            </g>
          </svg>

          <div className="header__links">
            <a href="#" className="header__link">communities</a>
            <a href="#" className="header__link">projects</a>
            <a href="#" className="header__link">offers</a>
            <a href="#" className="header__link">why rockstone</a>
          </div>

        </div>
        <div className="header__right">
          
          <Navigation />
          
          <div className="header__iconGroup header__firstIconGroup">
            <svg className="header__icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"/></svg>
            <div className="header__iconText header__enquire">
              enquire
            </div>
          </div>
          <div className="header__iconGroup header__secondIconGroup">
           <svg className="header__icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"/></svg>
            <div className="header__iconText">
              login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
