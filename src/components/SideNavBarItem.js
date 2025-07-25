export default function SideNavBarItem({ hasTopBorder }) {

  // if the topBorder parameter is passed, we want to add the top border style
  // we do this to prevent the top and bottom border from thickening when multiple SideNavBar items are coupled together
  const sideNavBarItemStylesFormatted = hasTopBorder ? {...sideNavBarItemStyles, ...topBorderStyles} : sideNavBarItemStyles;

  return <>
    <div style={sideNavBarItemStylesFormatted}>

    </div>
  </>;
}

const sideNavBarItemStyles = {
    width: "100%",
    height: "100px",
    boxSizing: "border-box",
    display: "flex",
    "flex-direction": "row",
    borderBottom: "1px solid white",
};

const topBorderStyles = {
    borderTop: "1px solid white",
}