import { useSelector } from 'react-redux';

function ViewCounter() {
    // useSelector to read the state of counterValue
    const counterValue = useSelector((state) => state.counter.value);

    return (
        <section>
            <p>Räknare: {counterValue}</p>
        </section>
    )
}

export default ViewCounter;