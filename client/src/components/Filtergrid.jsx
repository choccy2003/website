import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Filtergrid = () => {
  return (
    <div style={{ display: "flex", height: "50px" }}>
      <div style={{ marginLeft: "100px" }}>
        <div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "500", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "8px", userSelect: "none", backgroundColor: "#f5f5f5", padding: "8px", paddingTop: "6px", position: "relative", zIndex: "1" }}>
              Filter By
              <FiChevronDown style={{ strokeWidth: "3px", position: "relative", top: "4px" }} />
            </div>
          </div>
        </div>

        {true && (
          <div style={{ backgroundColor: "#f5f5f5", paddingLeft: "3px", fontSize: "16px", fontWeight: "500", zIndex: "100", position: "relative", bottom: "5px", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "0px 0 5px 5px",userSelect:"none" }}>
            <ol>
              <li style={{ paddingTop: "5px" }}>Price(low)</li>
              <li style={{ paddingTop: "5px" }}>Price(High)</li>
              <li style={{ paddingTop: "5px" }}>Best reviews</li>
              <li style={{ paddingTop: "5px", paddingBottom: "5px" }}>Most reviews</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filtergrid;
