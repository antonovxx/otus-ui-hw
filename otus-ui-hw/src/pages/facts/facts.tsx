import { use, useEffect, useState } from "react";
import styles from './facts.module.scss';

const Address = 'https://catfact.ninja/facts';

interface Fact {
    fact: string;
    length: number;
}

export const Facts = () => {
    const [facts, setFacts] = useState<Fact[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchFacts = async () => {
            try {
                const response = await fetch(Address);
                
                if(!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }

                const data = await response.json();

                setFacts(data.data);
            } catch (err)
            {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFacts();
    }, []);

    if(loading) {
        return <div className={styles.loading}>Загрузка...</div>
    }

    if(error){
        return <div className={styles.error}>{error}</div>
    }

    return (
        <div className={styles.factsContainer}>
            <h1>Facts about cats</h1>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index} className={styles.factItem}>
                        {fact.fact}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Facts;