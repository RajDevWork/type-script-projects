import { Document } from "mongoose";

export interface ICat extends Document {
    name: string;
    age: number;
    breed: string;
    description: string;
    kidsFriendly: boolean;
    apartmentFriendly: boolean;
    lifeSpan: number;
    energyLevel: number;
    image: string;
    color: string;
}