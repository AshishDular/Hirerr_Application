import { Link } from "react-router-dom";
import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> > JOHN DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              fuga odit corrupti sit dolorem cum, at expedita? Expedita ullam
              suscipit accusamus hic consectetur officia, ipsam, fuga
              exercitationem totam ipsum error?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              fuga odit corrupti sit dolorem cum, at expedita? Expedita ullam
              suscipit accusamus hic consectetur officia, ipsam, fuga
              exercitationem totam ipsum error?
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              fuga odit corrupti sit dolorem cum, at expedita? Expedita ullam
              suscipit accusamus hic consectetur officia, ipsam, fuga
              exercitationem totam ipsum error?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              fuga odit corrupti sit dolorem cum, at expedita? Expedita ullam
              suscipit accusamus hic consectetur officia, ipsam, fuga
              exercitationem totam ipsum error?
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              fuga odit corrupti sit dolorem cum, at expedita? Expedita ullam
              suscipit accusamus hic consectetur officia, ipsam, fuga
              exercitationem totam ipsum error?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              fuga odit corrupti sit dolorem cum, at expedita? Expedita ullam
              suscipit accusamus hic consectetur officia, ipsam, fuga
              exercitationem totam ipsum error?
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="write a message"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
