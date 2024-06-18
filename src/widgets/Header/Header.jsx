import "./Header.scss";
import Tooltip from "../../widgets/Tooltip/Tooltip.jsx";

export default function Header({ setActiveButton, activeButton }) {
  function ButtonItem({ svg, isActive, id }) {
    return (
      <button
        className={isActive ? "button active" : "button"}
        onClick={() => setActiveButton(id)}
      >
        {svg}
      </button>
    );
  }

  return (
    <nav>
      <Tooltip text={"главная"}>
        <ButtonItem
          svg={
            <svg className="icon" viewBox="0 0 74.398 74.398">
              <g>
                <g>
                  <path
                    d="M61.735,29.433l9.177,7.484c0.375,0.314,0.956,0.468,1.409,0.468c0.57,0,1.201-0.243,1.596-0.715
          c0.71-0.847,0.631-2.108-0.216-2.817L38.58,4.393c-0.372-0.312-0.815-0.456-1.266-0.459c-0.032-0.003-0.062,0.001-0.094-0.001
          c-0.032,0.002-0.063-0.002-0.095,0.001c-0.451,0.003-0.901,0.147-1.273,0.459L0.715,33.853c-0.846,0.709-0.957,1.971-0.248,2.817
          c0.396,0.472,0.963,0.715,1.534,0.715c0.454,0,0.659-0.153,1.034-0.468l6.699-5.826v31.408c0,4.369,4.551,7.967,8.999,7.967h36
          c4.206,0,7.001-3.286,7.001-7.967L61.735,29.433L61.735,29.433z M43.735,66.466h-15V44.658c0-1.067,2.376-2.192,4.061-2.192h9.579
          c1.478,0,1.36,0.753,1.36,2.192V66.466z M57.735,62.499c0,2.137-0.81,3.967-3.001,3.967h-6.999V44.658
          c0-3.639-1.691-6.192-5.36-6.192h-9.579c-3.665,0-8.061,2.418-8.061,6.192v21.808h-6.001c-2.229,0-4.999-1.813-4.999-3.967V27.847
          c0-0.034,0.242-0.067,0.24-0.102L37.1,8.463l21.342,18.051c-0.319,0.354-0.706,0.818-0.706,1.333L57.735,62.499L57.735,62.499z"
                  />
                </g>
              </g>
            </svg>
          }
          isActive={activeButton === "intro"}
          id="intro"
        />
      </Tooltip>

      <Tooltip text={"обо мне"}>
        <ButtonItem
          svg={
            <svg className="icon" viewBox="0 0 32 32">
              <g>
                <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
              </g>
            </svg>
          }
          isActive={activeButton === "about_me"}
          id="about_me"
        />
      </Tooltip>

      <Tooltip text={"навыки"}>
        <ButtonItem
          svg={
            <svg className="icon" viewBox="0 0 512 512">
              <g>
                <g>
                  <path d="M406,241c7.914,0,15.691,2.079,22.489,6.011c9.993,5.78,22.511-1.457,22.511-12.984V106c0-8.284-6.716-15-15-15H329.376 C330.445,85.764,331,80.379,331,75c0-41.355-33.645-75-75-75c-41.355,0-75,33.645-75,75c0,5.379,0.555,10.764,1.624,16H76 c-8.284,0-15,6.716-15,15v128.027c0,11.545,12.532,18.753,22.511,12.984C90.309,243.079,98.086,241,106,241 c24.813,0,45,20.187,45,45s-20.187,45-45,45c-7.914,0-15.691-2.079-22.489-6.011C73.518,319.21,61,326.443,61,337.973V497 c0,8.284,6.716,15,15,15h128.027c11.543,0,18.758-12.532,12.983-22.511C213.078,482.691,211,474.915,211,467 c0-24.813,20.187-45,45-45s45,20.187,45,45c0,7.915-2.078,15.691-6.011,22.489c-5.782,9.992,1.457,22.511,12.983,22.511H436 c8.284,0,15-6.716,15-15V337.973c0-11.543-12.53-18.756-22.511-12.984C421.691,328.921,413.914,331,406,331 c-24.813,0-45-20.187-45-45S381.187,241,406,241z M406,361c5.058,0,10.084-0.511,15-1.512V482h-91.513 c1.002-4.917,1.513-9.942,1.513-15c0-41.355-33.645-75-75-75c-41.355,0-75,33.645-75,75c0,5.058,0.511,10.083,1.513,15H91V359.488 c4.916,1.001,9.942,1.512,15,1.512c41.355,0,75-33.645,75-75c0-41.355-33.645-75-75-75c-5.058,0-10.084,0.511-15,1.512V121 h113.027c11.543,0,18.758-12.532,12.983-22.511C213.191,91.885,211,83.324,211,75c0-24.813,20.187-45,45-45s45,20.187,45,45 c0,8.324-2.191,16.885-6.011,23.489c-5.782,9.992,1.457,22.511,12.983,22.511H421v91.512c-4.916-1.001-9.942-1.512-15-1.512 c-41.355,0-75,33.645-75,75S364.645,361,406,361z"></path>
                </g>
              </g>
            </svg>
          }
          isActive={activeButton === "skills"}
          id="skills"
        />
      </Tooltip>

      <Tooltip text={"портфолио"}>
        <ButtonItem
          svg={
            <svg className="icon" viewBox="0 0 230.754 230.754">
              <g>
                <path d="m215.94,55.127h-63.065v-17.746c0-3.313-2.687-6-6-6h-62.996c-3.313,0-6,2.687-6,6v17.747h-63.066c-8.167-0.001-14.813,6.644-14.813,14.812v108.324c0,11.639 9.469,21.108 21.108,21.108h188.537c11.64,0 21.108-9.469 21.108-21.108v-108.324c0.001-8.168-6.645-14.813-14.813-14.813zm-6.294,132.246h-188.538c-5.022,0-9.108-4.086-9.108-9.108v-104.412l79.758,62.611c6.954,5.459 15.285,8.188 23.619,8.188 8.332,0 16.667-2.73 23.619-8.188l79.758-62.611v104.412c2.84217e-14,5.022-4.086,9.108-9.108,9.108zm-1.76-120.246l-76.301,59.897c-9.543,7.491-22.875,7.492-32.418,0l-76.3-59.897h185.019zm-118.007-23.746h50.996v11.747h-50.996v-11.747z"></path>
                <path d="m110.627,114.026h9.5c3.313,0 6-2.687 6-6s-2.687-6-6-6h-9.5c-3.313,0-6,2.687-6,6s2.686,6 6,6z"></path>
              </g>
            </svg>
          }
          isActive={activeButton === "portfolio"}
          id="portfolio"
        />
      </Tooltip>
    </nav>
  );
}