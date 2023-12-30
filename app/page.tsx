import '/components/navbar.css'

function ProjectHolder() {
  return (
    <div>
      <p>A giant square</p>
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar">
      <a className="navbarItem">Home</a>
      <a className="navbarItem">About</a>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <p>Hello</p>
      <ProjectHolder />
    </div>
  );
}                                       
