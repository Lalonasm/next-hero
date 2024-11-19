"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState('a');
    const [error, setError] = useState('');
    const [meals, setMeals] = useState([]);
    console.log(meals)

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json();
            console.log(data.meals);
            setMeals(data.meals);
            setError('')
        } catch (error) {
            setError('No Data Found')
        }

    }

    const handler = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value);
    }

    useEffect(() => {
        loadData()
    }, [])



    return (
        <div className="mt-12">
            <input onChange={handler} className="p-4 text-slate-900 border-transparent outline-none" type="text" placeholder="Search Meal ..." />
            <button onClick={() => loadData()} className="bg-red-400 p-4 rounded-e-xl">Search</button>
            <div className="mt-12 grid grid-cols-3 gap-12">
                {
                    meals?.length > 0 && !error && meals?.map((meal) => (
                        < div key={meal?.idMeal} className="border-2 p-4">
                            <Image src={meal.strMealThumb} width={500} height={500} alt={meal.strMeal} />
                            <h6>{meal.strMeal}</h6>
                            <p>{meal.strInstructions.slice(0, 100)}...</p>
                        </div>
                    ))
                }
                {
                    error && <h6>No Data Found...</h6>
                }


            </div>
        </div >
    );
};

export default Meals;