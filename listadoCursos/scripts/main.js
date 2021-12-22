import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";

// Instanciando objetos de la clase Curso.
const elem = document.getElementById("cursos");

// Imprime un Curso en el DOM.
// Recibe un objeto de tipo Curso.
function mostrarCurso(curso) {
    const hijo = document.createElement("div");
    hijo.classList.add("card");
    hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2"
        <h3 class="t5 s-mb-0 s-center">${curso.getNombre()}</h3>
        <div class="s-center"
            <span class="small">Clases: ${curso.getClases()}</span>
        </div>
    </div>
`;
    elem.appendChild(hijo);
};

const formulario = document.getElementById('formCursos');
formulario.addEventListener("submit", e => {
    e.preventDefault();
    const target = e.target;
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value);
    mostrarCurso(curso);
});

const profe = new Profesor("Abel", "Lechuga", "abel@gmail.com", true, ["react", "drupal"], 10);

const alumno1 = new Alumno("joseph", "gutierrez", "joseph@gmail.com", false, ["HTML", "CSS"]);
const alumno2 = new Alumno("maria", "rodriguez", "maria@gmail.com", true, ["HTML", "JS"]);

const html = new Curso("HTML desde cero", "mi-poster.png", 7);

html.setInscritos([...html.getInscritos(),alumno1]);
console.log(html);

html.setInscritos([...html.getInscritos(),alumno2]);
console.log(html);