const DynamicButton = ({
    children,
    padding = '15px 45px',
    color = '#ffffff',
    backgroundColor = '#43c6ac',
    borderRadius = '5px',
    onClick,
}) => {
    return (
        <button
            style={{
                padding: padding,
                color: color,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default DynamicButton;
