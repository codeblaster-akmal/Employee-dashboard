import { Link } from "react-router-dom"
import "../styles/notFound.css"

const NotFound = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1><span>4</span><span>0</span><span>4</span></h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <Link to="/">Back to the homepage...</Link>
      </div>
    </div>
  );
}

export default NotFound;