import "../Main.css";
import "../Intro/Intro.css";
export default function Intro() {
  return (
    <div className="intro">
      <title>главная</title>
      <h1>Создаю впечатления благодаря коду</h1>
      <p>
        Я frontend разработчик с огромным интересом к реализации красивых и
        функциональных интерфейсов, постоянно стремлюсь к саморазвитию и
        улучшению, делаю то, что завораживает и вовлекает каждого
      </p>
      <div className="buttonCircleGroup">
        <button type="button">
          <svg viewBox="0 0 471.2 471.2" width="2rem" height="2rem">
            <g>
              <g>
                <path d="M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8 c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8 C471.2,236.25,465.2,230.15,457.7,230.15z"></path>
                <path d="M226.1,346.75c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-62.7,62.8 V30.75c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v273.9l-62.8-62.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 L226.1,346.75z"></path>
              </g>
            </g>
          </svg>
          Скачать РЕЗЮМЕ
        </button>
        <div className="circle">
          <img src="images/circular_text.png" alt="circular_text" />
          <svg viewBox="0 0 512 512">
            <g>
              <g>
                <path d="m499.4,250.8c-51-86.3-143.6-140.4-243.4-140.4s-192.5,54.1-243.4,140.4c-2.1,3.1-2.1,7.3 5.32907e-15,10.4 51,86.3 143.6,140.4 243.4,140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zm-243.4,130c-90.5,0-174.8-47.8-221.6-124.8 46.8-77 131.1-124.8 221.6-124.8s174.8,47.8 221.6,124.8c-46.8,77-131.1,124.8-221.6,124.8z"></path>
                <path d="m256,162.4c-52,0-93.6,41.6-93.6,93.6 0,52 41.6,93.6 93.6,93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0,166.4c-40.6,0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8,32.3 72.8,72.8-32.2,72.8-72.8,72.8z"></path>
                <path d="m256,214.4v20.8c11.4,0 20.8,9.4 20.8,20.8s-9.4,20.8-20.8,20.8-20.8-9.4-20.8-20.8h-20.8c0,22.9 18.7,41.6 41.6,41.6 22.9,0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
