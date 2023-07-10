export const content = {
  title: "Portfolio",
  description: "This is my portfolio",
  name: "Lucas",
  lastname: "DEBEVE",
  email: "lucas.debeve2003@gmail.com",
  phone: "06 21 35 10 87",
  presentation:
    "Je m’appelle Lucas Debeve, je suis actuellement étudiant en BUT Informatique. Dire que je suis passionné par l’informatique serait pour moi trop généraliste, en effet, je me spécialise plutôt vers le développement web fullstack ainsi que la data. <br /><br /> En plus de l’informatique, j’aime beaucoup faire du sport comme le volley-ball ou le tennis. Je pratique ce premier sport depuis près de 10 ans à un rythme très soutenu.<br /><br /> En parallèle de ces activités, je fais également de la photographie, du montage vidéo, de la sculpture, et de la modélisation 3D.",
  skillsCategory: [
    {
      id: 1,
      name: "Front-end",
    },
    {
      id: 2,
      name: "Back-end",
    },
    {
      id: 3,
      name: "Algorithmie",
    },
    {
      id: 4,
      name: "Outils",
    },
    {
      id: 5,
      name: "Soft Skills",
    },
    {
      id: 6,
      name: "Base de données",
    },
    {
      id: 7,
      name: "Langues",
    },
  ],
  skills: [
    {
      id: 1,
      category: [1],
      name: "HTML",
      icon: "fa-html5",
    },
    {
      id: 2,
      category: [1],
      name: "CSS",
      icon: "fa-css3-alt",
    },
    {
      id: 3,
      category: [1, 3],
      name: "JavaScript",
      icon: "fa-js-square",
    },
    {
      id: 4,
      category: [1],
      name: "React",
      icon: "fa-react",
    },
    {
      id: 5,
      category: [2, 3],
      name: "Python",
      icon: "fa-python",
    },
    {
      id: 6,
      category: [2, 3],
      name: "PHP",
      icon: "fa-php",
    },
    {
      id: 7,
      category: [6],
      name: "MySQL",
      icon: "fa-database",
    },
    {
      id: 8,
      category: [4],
      name: "Git",
      icon: "fa-git-alt",
    },
    {
      id: 9,
      category: [4],
      name: "GitHub",
      icon: "fa-github",
    },
    {
      id: 10,
      category: [4],
      name: "GitLab",
      icon: "fa-gitlab",
    },
    {
      id: 11,
      category: [4],
      name: "npm",
      icon: "fa-npm",
    },
    {
      id: 12,
      category: [4],
      name: "VS Code",
      icon: "fa-code",
    },
    {
      id: 13,
      category: [4],
      name: "PyCharm",
      img: "./assets/img/pycharm.png",
    },
    {
      id: 14,
      category: [4],
      name: "PhpStorm",
      img: "./assets/img/phpstorm.png",
    },
    {
      id: 15,
      category: [7],
      name: "Français",
      icon: "fa-language",
    },
    {
      id: 16,
      category: [7],
      name: "Anglais",
      icon: "fa-language",
    },
  ],
  technologies: [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JavaScript",
    },
    {
      id: 4,
      name: "React",
    },
    {
      id: 5,
      name: "Python",
    },
    {
      id: 6,
      name: "PHP",
    },
    {
      id: 7,
      name: "MySQL",
    },
    {
      id: 8,
      name: "Flask",
    },
    {
      id: 9,
      name: "Oracle DB",
    },
    {
      id: 10,
      name: "Node JS",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Portfolio",
      link: "",
      img: "./assets/img/portfolio.png",
      technologies: [1, 2, 3, 4],
      year: 2023,
    },
    {
      id: 2,
      title: "Youtube Downloader",
      link: "https://downloader.lucasdebeve.fr/",
      img: "./assets/img/portfolio.png",
      technologies: [1, 2, 5, 8],
      year: 2023,
    },
    {
      id: 3,
      title: "Ouaf Notes",
      link: "https://lucasdebeve.github.io/ouaf-notes/",
      img: "./assets/img/portfolio.png",
      technologies: [1, 2, 3, 10],
      year: 2023,
    },
    {
      id: 4,
      title: "Blind Test Generator",
      link: "https://blind-test.lucasdebeve.fr/",
      img: "./assets/img/portfolio.png",
      technologies: [1, 2, 5, 8],
      year: 2023,
    },
    {
      id: 5,
      title: "2048",
      link: "http://2048.ada-bde.fr/",
      img: "./assets/img/portfolio.png",
      technologies: [1, 2, 3, 7],
      year: 2023,
    },
  ],
};
