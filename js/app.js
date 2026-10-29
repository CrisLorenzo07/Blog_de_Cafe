document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  const consulta = document.getElementById("consulta");
  if (consulta) {
    const curso = document.getElementById("curso");
    const cursoSolicitado = new URLSearchParams(window.location.search).get("curso");
    if (Array.from(curso.options).some((option) => option.value === cursoSolicitado)) {
      curso.value = cursoSolicitado;
      document.getElementById("mensaje").value =
        `Quisiera consultar la disponibilidad de ${curso.selectedOptions[0].textContent}. ¿Hay una convocatoria confirmada?`;
    }

    consulta.addEventListener("submit", (event) => {
      event.preventDefault();
      for (const id of ["nombre", "mensaje"]) {
        const campo = document.getElementById(id);
        campo.value = campo.value.trim();
      }
      if (!consulta.reportValidity()) return;
      document.getElementById("consulta-estado").textContent =
        "El envío está pendiente de configurar. Tu consulta no se ha enviado.";
    });
  }
});
