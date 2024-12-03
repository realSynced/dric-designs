import { Inter, Inria_Serif } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });

export const inria_serif = Inria_Serif({ 
    subsets: ["latin"], 
    weight: ["300", "400", "700"] // Updated to include all available weights
});