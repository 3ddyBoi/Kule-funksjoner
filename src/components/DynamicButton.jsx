const DynamicButton = ({
    children,
    padding = '15px 45px',
    color = '#ffffff',
    backgroundColor = '#43c6ac',
    borderRadius = '5px',
    margin = '0px',
    onClick,
}) => {
    return (
        <button
            style={{
                padding: padding,
                color: color,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                margin: margin,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default DynamicButton;
