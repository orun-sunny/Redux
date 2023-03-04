import Button from './Button.js';
import Count from ''


export default function Counter(id, increment, decrement) {
    // const [count, setCount] = useState(0);


    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
            <Count count={count}></Count>
            <div className='flex space-x-3'>
                <Button handeler={(id) => increment(id)}>increment</Button>
                <Button handeler={(id) => decrement(id)}> decrement </Button>
                <button className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
                    onClick={() => increment(id)}
                >Increment </button>

                <button className='bg-red-400 text-white px-3 py-2 rounded shadow'
                    onClick={() => decrement(id)}>Decrement </button>


            </div>

        </div>
    );
};

