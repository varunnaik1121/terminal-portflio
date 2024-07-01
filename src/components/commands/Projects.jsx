import terminal from '../../assets/terminal.jpg';
import spotify from '../../assets/spotify-clone.png';
import color_spotter from '../../assets/color-spotter.jpg';
import ProjectCard from '../ProjectCard';
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'spotify-clone',
      url: 'https://spotify-clone-varunnaik.vercel.app/',
      image: spotify,
    },
    {
      id: 2,
      name: 'color-spotter',
      url: 'https://color-spotter-varunnaik.netlify.app/',
      image: color_spotter,
    },
    {
      id: 3,
      name: 'terminal-portfolio',
      url: 'https://github.com/varunnaik1121?tab=repositories',
      image: terminal,
    },
  ];

  return (
    <div className=" py-2 grid grid-cols-3">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            name={project.name}
            url={project.url}
            image={project.image}
          />
        );
      })}
    </div>
  );
}
