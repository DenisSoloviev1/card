import "../../widgets/Main/Main.scss";
import "./AboutMe.scss";
export default function AboutMe() {
  return (
    <div className="aboutMe">
      <title>обо мне</title>
      <h1>Кто я такой и с чего начал</h1>
      <p>
        Студент, ранее изучавший информационную безопасность, но страсть к
        frontend разработке изменила планы. За то время, что я осваиваю и
        работаю в этой сфере успел сделать несколько проектов, посотрудничать с
        талантливыми людьми и принять участие в хакатонах. По своей натуре
        скопокойный и целеустремлённый человек, в свободное время слушаю
        IT-подкасты, чтобы быть в курсе тенденций в технологиях
      </p>
      <div className="aboutInfo">
        <h1>
          5 <p>месяцев опыта</p>
        </h1>
        <h1>2 <p>готовых проекта</p></h1>
      </div>
    </div>
  );
}
