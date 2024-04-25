import './css/Skelet.css'

const ElementSkeleton = ({ type }) => {
    const classes = `skeleton ${type}`;

    return (
        <div className={classes}></div>
    );
}
 
export default ElementSkeleton;