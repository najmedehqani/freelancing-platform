import { Link } from "react-router-dom";

export default function Logo({ size = "40px" }) {
  return (
    <Link to="/" className="block" style={{ width: size }}>
      <img src="/logo.png" className="w-full h-auto" alt="logo" />
    </Link>
  );
}