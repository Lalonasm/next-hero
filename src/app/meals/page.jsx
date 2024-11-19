
import Meals from "@/components/Meals";
import styles from './styles.module.css'

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
};


const MealsPage = () => {

    return (
        <div className="p-12">
            <h1 className="text-red-400 font-semibold text-3xl">Choose Your Meals</h1>
            <p className={styles.font_large}>Choose your meals of your choice by searching... ...</p>
            <Meals></Meals>
        </div>
    );
};


export default MealsPage;