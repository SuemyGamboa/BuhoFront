const API_URL = import.meta.env.VITE_API_URL || '';

export function fetchSubjects() {
  return fetch(`${API_URL}/api/subjects`, { headers: { Accept: 'application/json' } })
    .then((response) => {
      if (!response.ok) {
        throw new Error('No fue posible cargar las materias disponibles.');
      }
      return response.json();
    });
}
