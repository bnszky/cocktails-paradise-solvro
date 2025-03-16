export default interface Ingredient {
    id: string;
    name: string;
    description: string;
    alcohol: boolean;
    type: string;
    percentage: number | null;
    imageUrl: string | null;
    measure: string;
    createdAt: string;
    updatedAt: string;
}