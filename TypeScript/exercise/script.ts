async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

interface CursoProps {
  nome: string;
  horas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: string[];
  nivel: 'iniciante' | 'avancado'
}

function mostrarCursos(cursos: CursoProps[]) {
  cursos.forEach(curso => {
    let color;
    if (curso.nivel === 'iniciante') {
      color = 'blue';
    } else {
      color = 'red';
    }

    document.body.innerHTML += `
    <div>
      <h2 style="color: ${color}">${curso.nome}</h2> 
      <p>Horas: ${curso.horas}</p>
      <p>Gratuito: ${curso.gratuito ? 'Sim' : 'Não'}</p>
      <p>Tag: ${curso.tags.join(', ')}</p>
      <p>Aulas: ${curso.idAulas.join(' | ')}</p>
    </div>
    `
  })
};

fetchCursos();

