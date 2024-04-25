import ElementSkeleton from "./ElementSkeleton";
import Shimmer from "./Shimmer";
import './css/Skelet.css'


const CardSkeleton = () => {
    return (
        <div className="skeleton-wrapper mt-3">
            <div className="card">
                <ElementSkeleton type="image" />

                <div className="card-body">
                    <div>
                        <ElementSkeleton type="text" />
                    </div>
                    <ElementSkeleton type="title" />
                    <ElementSkeleton type="text" />
                    <ElementSkeleton type="text" />
                </div>
                <div className="mx-3">
                    <ElementSkeleton type="text" />
                </div>
            </div>
            <Shimmer />
        </div>
        
    );
}
 
export default CardSkeleton;