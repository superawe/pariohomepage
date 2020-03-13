import React from "react";
import { NavLink } from "react-router-dom";

const ArticleBox = props => {
  /*
    const [ref, inView, entry] = useInView({
    threshold: 0,
    triggerOnce: true
  });
  */

  return (
    <div className="col-lg-4 col-md-6 mb-30px card-group">
      <div className="card h-100 border-0">
        <NavLink
          to={{
            pathname: "/articles/" + props.articleid
          }}
        >
          <img
            className="img-fluid mb-2"
            src="assets/img/softrunning.jpg"
            alt=""
          ></img>
        </NavLink>
        <div className="card-body pl-0 pr-0">
          <NavLink
            to={{
              pathname: "/articles/" + props.articleid
            }}
            className="articlehead mb1"
          >
            <h2 className="mb-1 articlehead">{props.headline}</h2>
          </NavLink>
          <h4 className="card-text articletext mb-4">{props.abstract}</h4>
          <NavLink
            to={{
              pathname: "/articles/" + props.articleid
            }}
            className="post-read-more"
          >
            Read more...
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ArticleBox;
