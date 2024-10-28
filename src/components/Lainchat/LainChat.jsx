
import { LineChart, Line,XAxis,YAxis} from 'recharts';

const LainChat = () => {

    const marksData = [
        { id: 1, name: 'Alice', math: 77, physics: 85, chemistry: 80 },
        { id: 2, name: 'Bob', math: 80, physics: 78, chemistry: 88 },
        { id: 3, name: 'Charlie', math: 95, physics: 92, chemistry: 91 },
        { id: 4, name: 'David', math: 90, physics: 88, chemistry: 84 },
        { id: 5, name: 'Emma', math: 68, physics: 74, chemistry: 72 },
        { id: 6, name: 'Frank', math: 97, physics: 93, chemistry: 95 },
        { id: 7, name: 'Grace', math: 85, physics: 80, chemistry: 86 },
        { id: 8, name: 'Hannah', math: 77, physics: 76, chemistry: 79 },
        { id: 9, name: 'Ian', math: 84, physics: 82, chemistry: 87 },
        { id: 10, name: 'Jack', math: 92, physics: 89, chemistry: 90 }
    ];
    return (
        <div>
            <LineChart md:width={700} md:height={400} data={marksData} >
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="physics" stroke='black'></Line>
                <Line dataKey="chemistry" stroke="red"></Line>
            </LineChart>
        </div>
    );
};

export default LainChat;