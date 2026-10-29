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
      const texto = [
        "Consulta de disponibilidad — BlogDeCafé",
        `Nombre: ${document.getElementById("nombre").value.trim()}`,
        `Correo: ${document.getElementById("email").value.trim()}`,
        `Curso: ${curso.selectedOptions[0].textContent}`,
        "",
        document.getElementById("mensaje").value.trim(),
      ].join("\n");
      const url = URL.createObjectURL(new Blob([texto], { type: "text/plain;charset=utf-8" }));
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.download = "consulta-blogdecafe.txt";
      document.body.appendChild(enlace);
      enlace.click();
      enlace.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      document.getElementById("consulta-estado").textContent =
        "Se ha preparado el archivo para descargar. La consulta no se ha enviado ni se ha reservado una plaza.";
    });
  }
});
