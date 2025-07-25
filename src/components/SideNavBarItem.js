export default function SideNavBarItem({ Icon, text, iconStyle, hasTopBorder }) {

  // if the topBorder parameter is passed, we want to add the top border style
  // we do this to prevent the top and bottom border from thickening when multiple SideNavBar items are coupled together
  const sideNavBarItemStylesFormatted = hasTopBorder ? {...sideNavBarItemStyles, ...topBorderStyles} : sideNavBarItemStyles;

  // if the user provides custom styling for the icons, we combine it with the default styling
  const combinedIconStyles = { ...iconStyles, ...iconStyle };

  return <>
    <div style={sideNavBarItemStylesFormatted}>
        {Icon && <Icon style={combinedIconStyles} />}
        <div style={textStyles}>
            {text}
        </div>
    </div>
  </>;
}

const sideNavBarItemStyles = {
    width: "100%",
    height: "70px",
    boxSizing: "border-box",
    display: "flex",
    "flex-direction": "row",
    borderBottom: "1px solid white",
    alignItems: "center",
};

const topBorderStyles = {
    borderTop: "1px solid white",
}

const iconStyles = {
    width: "40px",
    height: "40px",
    margin: "0px 10px 0px 10px",
}

const textStyles = {
    margin: "0px 10px 0px 10px",
    fontSize: "15px",
}