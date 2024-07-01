import {useState} from "react";
import "./App.css";
import BubbleUI from "@/components/BubbleElement.tsx";
import companyData from "./companies.ts"

const CompanyBubble = (props) => {
    return (
       <div
          style={{
              backgroundColor: props.backgroundColor + "d0",
          }}
          className={"companyBubble"}
       >
           {(
              <div
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexDirection: "column",
                     transition: "opacity 0.1s ease",
                     opacity: props.bubbleSize > 50 ? 1 : 0,
                     pointerEvents: "none",
                 }}
              >
                  <img
                     src={`./companyLogos/${props.symbol}.svg`}
                     alt=""
                     style={{
                         width: 50,
                         borderRadius: `50%`,
                         marginBottom: 10,
                     }}
                  ></img>
                  <p
                     style={{
                         color: props.textColor,
                         fontSize: 14,
                         marginBottom: 6,
                         fontWeight: 1000,
                         maxWidth: 150,
                         textAlign: "center",
                     }}
                  >
                      {props.name}
                  </p>
                  <p
                     style={{
                         color: props.textColor,
                         fontSize: 14,
                         marginBottom: 5,
                         maxWidth: 100,
                         opacity: 0.5,
                     }}
                  >
                      {props.symbol}
                  </p>
              </div>
           )}
       </div>
    );
}

function App() {
    const [options, setOptions] = useState({
        size: 180,
        minSize: 50,
        gutter: 8,
        provideProps: true,
        numCols: 3,
        fringeWidth: 160,
        yRadius: 130,
        xRadius: 220,
        cornerRadius: 50,
        showGuides: false,
        compact: true,
        gravitation: 5,
        shape: 'circle',
    });

    const getStockBubbles = () => {
        return companyData.slice(0, 20).map((company, i) => {
            return <CompanyBubble {...company} key={i}/>;
        });
    };
    const stockBubbles = getStockBubbles();



    return (
       <BubbleUI className="bubbleUI z-10" options={options}>
           {stockBubbles}
       </BubbleUI>
    );
}

export default App;
