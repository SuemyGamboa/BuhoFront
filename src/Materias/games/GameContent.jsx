const API_URL = import.meta.env.VITE_API_URL || '';

const contentIsImage = (value) => (
  typeof value === 'string' && (/^https?:\/\//i.test(value) || value.startsWith('/storage/'))
);

function GameContent({ value, className = '' }) {
  if (contentIsImage(value)) {
    const src = typeof value === 'string' && value.startsWith('/storage/')
      ? `${API_URL}${value}`
      : value;
    return <img alt="Contenido de actividad" className={`player-game-image ${className}`} src={src} />;
  }

  return <span className={className}>{value}</span>;
}

export default GameContent;
