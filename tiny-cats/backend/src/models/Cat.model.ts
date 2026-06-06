import mongoos from 'mongoose';
import { ICat } from '../types/cats.types';
const catChema = new mongoos.Schema<ICat>({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    breed: {type: String, required: true},
    description: {type: String, required: true},
    kidsFriendly: {type: Boolean, default: true},
    apartmentFriendly: {type: Boolean, default: true},
    lifeSpan: {type: Number, required: true},
    energyLevel: {type: Number, required: true},
    image: {type: String, required: true},
    color: {type: String, required: true}
},{timestamps: true});

const Cat = mongoos.model<ICat>('Cat', catChema);
export default Cat;