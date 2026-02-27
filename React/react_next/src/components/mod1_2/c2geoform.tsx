import { Square } from './c2Square'
import { Circle } from './c2Circle'
export const GeoForm = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold'>Geometry Forms</h3>
        <div className='flex gap-2 font-bold p-3'>
            <Square/>
            <Circle/>
        </div>
        </div>
    );
};