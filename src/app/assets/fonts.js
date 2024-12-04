import { Inter, Inria_Serif, Hurricane } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });

export const inria_serif = Inria_Serif({ 
    subsets: ["latin"], 
    weight: ["300", "400", "700"] // Updated to include all available weights
});

export const hurricane = Hurricane({ 
    subsets: ["latin"], 
    weight: "400"
});