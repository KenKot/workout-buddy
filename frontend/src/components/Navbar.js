import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="container">
      <Link to="/" className="logo">
        <h1>Workout Buddy</h1>
      </Link>
    </header>
  );
}
