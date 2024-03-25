import './features.scss'
// import PropTypes from "prop-types"
// eslint-disable-next-line
const Features = ({ picture, title, description }) => {
    
    return (

        <div className="feature-item">
            <img src={picture} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {description}
            </p>
        </div>

    );
};

// Features.PropTypes = {
//     picture: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
// }

export default Features;