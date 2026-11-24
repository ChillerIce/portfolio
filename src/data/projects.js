// Add your work here. Each entry becomes a card in the carousel.
// `image` is optional: put files in /public/projects and use "/projects/name.png".
// Without an image, the card shows a colour block using `color`.

import CGPGImage from "../assets/CGPGAssignment.png"
import GADVImage from "../assets/GADVAssignment.png"
import TMODImage from "../assets/TMODAssignment.jpg"

const projects = [
  {
    title: "Microwaved",
    type: "Game jam",
    year: 2026,
    description: "It is a wave-based roguelike made in 4 days.",
    tools: ["Godot", "GDScript"],
    image: "https://img.itch.zone/aW1nLzI4NzkwMTUxLnBuZw==/315x250%23c/Ed1%2FV8.png",
    color: "#FF8FA3",
    link: "https://colderice.itch.io/microwaved",
  },
  {
    title: "Black hole and Forklift Shader",
    type: "School project",
    year: 2026,
    description: "Created for an assignment on Unity's shaders.",
    tools: ["Unity", "C#, HSLS, Shader Graph"],
    image: CGPGImage,
    color: "#7BD3C5",
    link: "https://www.youtube.com/watch?v=CTReQXJ5YqQ",
  },
  {
    title: "Psyhop",
    type: "School Project",
    year: 2026,
    description: "A simple platformer game with a physic-based telekinetic mechanic.",
    tools: ["Unity", "C#"],
    image: GADVImage,
    color: "#FFD479",
    link: "https://example.com",
  },
  {
    title: "3D Sci-Fi Level Design",
    type: "School Project",
    year: 2026,
    description: "An abandoned laboratory filled with incubation tubes.",
    tools: ["Maya"],
    image: TMODImage,
    color: "#FFD479",
    link: "https://example.com",
  },
];

export default projects;