
import Styles from "./Tooltip.module.css";
import styled from "styled-components";

const Position = styled.span`
display: inline-block;
position: absolute;
font-family: 'Times New Roman', Times, serif;
color: white;
background-color: black;
margin-left: ${(props)=>props.position == 'left' ? '370px' : props.position == 'top' ? '630px' : props.position == 'bottom' ? '630px' : props.position == 'right' && '890px'};
margin-top: ${(props)=>props.position == 'left' ? '-80px' : props.position == 'top' ? '-200px' : props.position == 'bottom' ? '30px' : props.position == 'right' && '-80px'};
width: 250px;
padding: 10px;
border-radius: 10px;
flex-wrap: wrap;
word-wrap: break-word;
&:before {
    content: '';
    position: absolute;
    transform: rotate(${(props)=>props.position == 'left' ? '270deg' : props.position == 'top' ? '0deg' : props.position == 'bottom' ? '180deg' : props.position == 'right' && '90deg'});
    top: ${(props)=>props.position == 'left' ? '40%' : props.position == 'top' ? '100%' : props.position == 'bottom' ? '-19%' : props.position == 'right' && '40%'};
    right: ${(props)=>props.position == 'left' ? '-7%' : props.position == 'top' ? '45%' : props.position == 'bottom' ? '45%' : props.position == 'right' && '100%'};
    border-width: 10px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}
`;


function Tooltip({ isHover, setIsHover, position }) {
    return (
        <>
            <div className={Styles.tooltipContainer}>
                <span
                    className={Styles.tooltip}
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={() => setIsHover(false)}
                >
                    <h2>Hover over me!</h2>
                </span>

                {isHover && (
                    <Position position={position}>
                        <h3>Thanks for hovering! I'm a tooltip </h3>
                    </Position>
                )}
            </div>
        </>
    );
}

export default Tooltip;