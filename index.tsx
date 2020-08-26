import * as React from "react";
import * as ReactDOM from "react-dom";

function Content() {
  return (
    <div>
      abc
      {/*language=PostCSS*/}
      <style jsx>{`
          div {
              color: red;
          }
      `}</style>
    </div>
  )
}


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Content/>, wrapper) : false;